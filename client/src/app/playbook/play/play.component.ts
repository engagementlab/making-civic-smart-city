import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { Observable } from 'rxjs/Observable';
import { DataService } from '../../data.service';
import { PlaysService } from '../../plays.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public content: any;
  public nextPlayName: string;
  public nextPlayKey: string;
  public hasNext: Observable<boolean>;

  private key: string;

  @ViewChild('stickyMenu') menuElement: ElementRef;
  @ViewChild('next') nextElement: ElementRef;

  sticky: boolean = false;
  elementPosition: number;
	endPosition: number;

  constructor(private _scrollToService: ScrollToService, private route: ActivatedRoute, public _dataSvc: DataService, public _playsSvc: PlaysService) { 

    this.route.params.subscribe(params => {

      this._scrollToService
        .scrollTo({
          target: 'top',
          easing: 'easeOutQuad',
          duration: 1
        });

      this.key = params['key'];
      this._dataSvc.getDataForUrl('play/'+this.key).subscribe(response => {

        this.content = response;  

        if(!this._playsSvc.plays) {
          this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key').subscribe(response => {

            this._playsSvc.plays = response;
            this.hasNext = this.getNextPlay();
            this.endPosition = this.nextElement.nativeElement.offsetTop;
          
          });
        }
        else {
          this.hasNext = this.getNextPlay();
          this.endPosition = this.nextElement.nativeElement.offsetTop
        }
      
      });

    });

  }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.elementPosition = this.menuElement.nativeElement.offsetTop;

	}

	@HostListener('window:scroll', ['$event'])
  handleScroll() {

		const windowScroll = window.pageYOffset-150;
		this.sticky = windowScroll >= this.elementPosition && windowScroll < this.endPosition;
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

    let thisIndex = this._playsSvc.plays.findIndex((play) => { return play.key === this.key });
    let nextPlay = this._playsSvc.plays[thisIndex+1];
    
    if(nextPlay !== undefined) {
      this.nextPlayKey = nextPlay.key;
      this.nextPlayName = nextPlay.name;
    }

    return Observable.of(nextPlay !== undefined);
    
  }


}
