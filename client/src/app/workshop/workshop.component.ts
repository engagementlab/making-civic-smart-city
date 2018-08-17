import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
	  var rellax = new Rellax('.parallax');

  }

}
