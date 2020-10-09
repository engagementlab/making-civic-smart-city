import { Component, OnInit } from '@angular/core';
import * as Rellax  from 'rellax';
import isMobile from 'ismobilejs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public content: any;

  constructor(private _dataSvc: DataService) { 

  }


  async ngOnInit() {
    const data = await this._dataSvc.getDataForUrl('about')
    this.content = data[0];    
	  
    if(!isMobile(window.navigator.userAgent).phone)
      new Rellax('.img');
    
  }

}
