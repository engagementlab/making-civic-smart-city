import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TweenMax, TimelineLite } from "gsap";

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	public cities: string[] = [
		"Boston",
		"New York",
		"Los Angeles",
		"Chicago",
		"Philadelphia",
		"Miami"
	];
	tl: TimelineLite; 

  constructor(private router: Router) {

    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      this.tl.reverse();
    });

  }

  ngOnInit() {

  	this.tl = new TimelineLite({paused:true});
  	let tl = this.tl;
  	let open = document.getElementById('open');
  	let close = document.getElementById('close');
  	let navEl = document.getElementById('menu');
  	tl.fromTo(open, .2, {autoAlpha:1}, {autoAlpha:0, rotateY:'90deg'});
  	tl.fromTo(close, .2, {autoAlpha:0}, {autoAlpha:1, display:'block'}, '+=0.2');
  	tl.fromTo(navEl, .6, {autoAlpha:0}, {height:'100%', autoAlpha:1, ease:Back.easeOut}, '+=0.1');

  }

  openNav() {

  	document.body.classList.add('nav')
  	this.tl.play();

  }

  closeNav() {
  	this.tl.reverse();
  }

}
