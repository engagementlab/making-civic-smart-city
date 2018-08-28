import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

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

  private key: string;

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: number;
	endPosition: number;

  constructor(private _scrollToService: ScrollToService, private route: ActivatedRoute, public _dataSvc: DataService, public _playsSvc: PlaysService) { 

    this.route.params.subscribe(params => {

      this.key = params['key'];
      this._dataSvc.getDataForUrl('play/'+this.key).subscribe(response => {

        this.content = response;

        if(!this._playsSvc.plays) {
          this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key').subscribe(response => {

            this._playsSvc.plays = response;
            this.getNextPlay();
          
          });
        }
        else
          this.getNextPlay();
      
      });

    });

  }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.elementPosition = this.menuElement.nativeElement.offsetTop

	}

	@HostListener('window:scroll', ['$event'])
  handleScroll() {

		const windowScroll = window.pageYOffset-150;
		this.sticky = windowScroll >= this.elementPosition & windowScroll < this.endPosition;
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

    if(nextPlay === undefined) return;
    this.endPosition = document.getElementById('next').offsetTop
    
    this.nextPlayKey = nextPlay.key;
    this.nextPlayName = nextPlay.name;
    
  }


}
