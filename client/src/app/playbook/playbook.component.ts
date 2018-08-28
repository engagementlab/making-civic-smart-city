import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { DataService } from '../data.service';
import { PlaysService } from '../plays.service';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.scss']
})
export class PlaybookComponent implements OnInit {

  public content: any[];

  sticky: boolean = false;
	elementPosition: any;

  public triggerScrollTo(name: string) {
    
    this._scrollToService
      .scrollTo({
        target: 'play_'+name,
        easing: 'easeOutElastic',
        offset: -100,
        duration: 1000
      });

  }

  constructor(private _scrollToService: ScrollToService, public _dataSvc: DataService, public _playsSvc: PlaysService) { 

    if(!this._playsSvc.plays) { 
      this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key').subscribe(response => {

        this._playsSvc.plays = response;
        this.content = response;
      
      });
    }

  }

  ngOnInit() {
  }

}
