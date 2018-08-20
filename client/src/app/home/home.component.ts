import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public playTitles: string[] = [
		"Embrace \"Smart Cities\"",
		"Cultivate Local Innovation Ecosystem",
		"Invite Public Influence",
		"Question Data",
		"Imagine The Possible"
	];

  constructor() { }

  ngOnInit() {

	  var rellax = new Rellax('.img');
	  particlesJS.load('particles-js', 'assets/particlesjs.json', function() {
	  	console.log()
	  	document.querySelector('.particles-js-canvas-el').style.width = '100vmax!important';
			// width: 100vmax !important;
			// height: 100vmax !important;
		});
  }

}
