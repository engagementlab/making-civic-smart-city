import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import {
  ScrollToService
} from '@nicky-lenaers/ngx-scroll-to';

import {
  DataService
} from '../data.service';
import {
  PlaysService
} from '../plays.service';

import {
  create as createDots
} from '../dots';

import * as _ from 'underscore';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.scss']
})
export class PlaybookComponent implements OnInit, AfterViewInit {

  public content: any;

  sticky: boolean = false;
  elementPosition: any;

  @ViewChildren('allTheseThings') things: QueryList < any > ;


  public triggerScrollTo(name: string) {

    this._scrollToService
      .scrollTo({
        target: 'play_' + name,
        easing: 'easeOutElastic',
        offset: -100,
        duration: 1000
      });

  }

  constructor(private _scrollToService: ScrollToService, public _dataSvc: DataService, public _playsSvc: PlaysService) {}

  async ngOnInit() {

    if (!this._playsSvc.plays) {
      const response = await this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key');

      this._playsSvc.plays = response;
      this.content = response;

    } else
      this.content = this._playsSvc.plays;

    createDots(document.getElementById('dots'), 4, 1, 200, true);
    createDots(document.querySelector('#intro canvas'), 3, 1, 200);

  }

  ngAfterViewInit() {

    this.things.changes.subscribe(t => {

      let els = document.querySelectorAll('.play');
      _.each(els, (el) => {
        let numDots = Math.random() * (5 - 2) + 2;
        let numEmpty = Math.random() * (3 - 1) + 1;
        createDots(el.querySelector('canvas'), numDots, numEmpty, 300);
      });

    })

  }

}