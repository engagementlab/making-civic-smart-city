import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';
import * as ismobile from 'ismobilejs';

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

  	if(!ismobile.phone)
		  new Rellax('.img');

	  particlesJS.load('particles-js', 'assets/particlesjs.json', function() {
		});
  }

}
