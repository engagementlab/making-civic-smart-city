import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
	  var rellax = new Rellax('.img');

  }

  public getPeople() {
  	return new Array(30);
  }

}
