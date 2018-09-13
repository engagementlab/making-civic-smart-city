import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';
import * as ismobile from 'ismobilejs';

import { create as createDots } from '../dots';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    if(ismobile.phone)
      return;

    createDots(document.getElementById('dots'), 4, 0, 200, true);
    createDots(document.getElementById('dots-howto'), 4, 2, 200, true);

	  new Rellax('.parallax');

  }

}
