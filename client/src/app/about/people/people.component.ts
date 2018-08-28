import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public content: any;

  constructor(private _dataSvc: DataService) { 

    this._dataSvc.getDataForUrl('people').subscribe(response => {
      
      this.content = response[0].people;

    });

  }

  ngOnInit() {
  }

}
