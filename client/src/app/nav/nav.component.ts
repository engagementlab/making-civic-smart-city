import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TweenMax, TimelineLite } from "gsap";

import { filter } from 'rxjs/operators';

import { DataService } from '../data.service';
import { PlaysService } from '../plays.service';

import * as ismobile from 'ismobilejs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	public plays: any[];
  public whitepaperUrl: string;

	tl: TimelineLite; 

  constructor(private _dataSvc: DataService, private _playsSvc: PlaysService, private router: Router) {

    // Hide nav when nav occurs
    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      this.tl.reverse();
    });

    // Get pdf urls if needed
    if(this._dataSvc.whitepaperUrls === undefined) {
      this._dataSvc.getFilteredDataForUrl('about', 'whitepaperPdf betaBlocksPdf').subscribe(item => {
        
        this._dataSvc.setWhitepaperUrl({
          whitepaperPdf: item[0].whitepaperPdf.url,
          betaBlocksPdf: item[0].betaBlocksPdf,
        });
        this.whitepaperUrl = this._dataSvc.whitepaperUrls['whitepaperPdf'];

      });
    }

    // Get plays if needed
    if(!this._playsSvc.plays) { 
      this._dataSvc.getFilteredDataForUrl('play', 'name%20blurb%20key').subscribe(response => {

        this._playsSvc.plays = response;
        this.plays = response;
      
      });
    }

  }

  ngOnInit() {


  	this.tl = new TimelineLite({paused:true});
    
  	let tl = this.tl;
  	let open = document.getElementById('open');
    let close = document.getElementById('close');
  	let home = document.getElementById(ismobile.phone ? 'home-mobile' : 'home');
  	let navEl = document.getElementById('menu');

    TweenLite.set(open, {transformStyle:'preserve-3d'});
    TweenLite.set(close, {transformStyle:'preserve-3d'});
  	tl.fromTo(open, .1, {autoAlpha:1}, {autoAlpha:0, rotationY:90});
    tl.fromTo(close, .2, {autoAlpha:0, rotationY:90}, {autoAlpha:1, rotationY:0, display:'block'}, '+=0.1');
    tl.set(close, {css:{zIndex:21}});
    tl.fromTo(navEl, .6, {autoAlpha:0}, {top:0, autoAlpha:1, ease:Quad.easeOut}, '+=0.1');

    tl.set(home, {css:{zIndex:21}});
    if(ismobile.phone)
      tl.fromTo(home, .2, {autoAlpha:0}, {autoAlpha:1, display:'block'}, '+=0.1');
    else
      tl.fromTo(home, .2, {autoAlpha:0, rotationY:90}, {autoAlpha:1, rotationY:0, display:'block'}, '+=0.1');

  }

  openNav() {

  	document.body.classList.add('nav')
  	this.tl.play();

  }

  closeNav() {

  	this.tl.reverse();

  }

}
