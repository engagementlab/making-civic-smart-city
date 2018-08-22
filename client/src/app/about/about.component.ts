import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';
import * as ismobile from 'ismobilejs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
    if(!ismobile.phone)
      new Rellax('.img');
    
  }

  public getPeople() {
  	return new Array(30);
  }

}
