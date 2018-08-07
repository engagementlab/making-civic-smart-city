import { Component, OnInit } from '@angular/core';
import { TweenMax, TimelineLite } from "gsap";

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

  constructor() { }

  ngOnInit() {

  	this.tl = new TimelineLite({paused:true});
  	let tl = this.tl;
  	let open = document.getElementById('open');
  	let close = document.getElementById('close');
  	let navEl = document.getElementById('menu');
  	tl.fromTo(open, .4, {autoAlpha:1}, {autoAlpha:0, rotateY:'90deg'});
  	tl.fromTo(close, .4, {autoAlpha:0}, {autoAlpha:1, display:'block'}, '+=0.2');
  	tl.fromTo(navEl, 1, {autoAlpha:0}, {height:'100%', autoAlpha:1, ease:Back.easeOut}, '+=0.1');

  }

  openNav() {

  	document.body.classList.add('nav')
  	this.tl.play();

  }

  closeNav() {
  	this.tl.reverse();
  }

}
