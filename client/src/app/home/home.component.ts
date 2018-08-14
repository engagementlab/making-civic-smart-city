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

	  // var rellax = new Rellax('.img');
  }

}
