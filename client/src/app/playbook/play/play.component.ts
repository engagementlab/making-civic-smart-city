import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  ScrollToService
} from '@nicky-lenaers/ngx-scroll-to';

import {
  Observable
} from 'rxjs/Observable';
import {
  DataService
} from '../../data.service';
import {
  PlaysService
} from '../../plays.service';

import {
  fadeInAnimation
} from '../../animations/fade';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  animations: [fadeInAnimation],
  host: {
    '[@fadeInAnimation]': ''
  }
})
export class PlayComponent implements OnInit {

  public content: any;
  public nextPlayName: string;
  public nextPlayKey: string;
  public hasNext: boolean;

  private key: string;

  @ViewChild('stickyMenu') menuElement: ElementRef;
  @ViewChild('next') nextElement: ElementRef;

  sticky: boolean = false;
  elementPosition: number;
  endPosition: number;

  constructor(private _scrollToService: ScrollToService, private route: ActivatedRoute, public _dataSvc: DataService, public _playsSvc: PlaysService) {  }

  async ngOnInit() {
    
    this.route.params.subscribe(params => {

      this._scrollToService
        .scrollTo({
          target: 'top',
          easing: 'easeOutQuad',
          duration: 1
        });

      this.key = params['key'];
      this.getContent();

    });
  }

  ngAfterViewInit() {

    this.elementPosition = this.menuElement.nativeElement.offsetTop;

  }

  async getContent() {

    const response = await this._dataSvc.getDataForUrl(`play/${this.key}`);
    this.content = response;

    if (!this._playsSvc.plays) {
      const plays = await this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key')
        this._playsSvc.plays = plays;

        this.getNextPlay().subscribe(next => {
          this.hasNext = next;
        });
    } else
      this.getNextPlay().subscribe(next => {
        this.hasNext = next;
      });    

  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {

    const windowScroll = window.pageYOffset - 150;
    let isSticky = false;

    if (this.nextElement.nativeElement) {
      let stopY = (this.nextElement.nativeElement.offsetTop - this.nextElement.nativeElement.scrollHeight / 2)
      isSticky = (windowScroll > this.elementPosition && windowScroll < stopY);
    } else
      isSticky = windowScroll > this.elementPosition;

    this.sticky = isSticky;

  }

  public triggerScrollTo(name: string) {

    this._scrollToService
      .scrollTo({
        target: name,
        offset: -100,
        duration: 1700
      });

  }

  private getNextPlay() {

    let thisIndex = this._playsSvc.plays.findIndex((play) => {
      return play.key === this.key
    });
    let nextPlay = this._playsSvc.plays[thisIndex + 1];

    if (nextPlay !== undefined) {
      this.nextPlayKey = nextPlay.key;
      this.nextPlayName = nextPlay.name;
    }

    let obs = Observable.of(nextPlay !== undefined);
    return obs;

  }


}