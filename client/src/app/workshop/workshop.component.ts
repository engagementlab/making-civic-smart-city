import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';
import * as ismobile from 'ismobilejs';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	if(!ismobile.phone)
		  new Rellax('.parallax');

  }

}
