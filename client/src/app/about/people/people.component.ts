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

  }

  async ngOnInit() {

    const response = await this._dataSvc.getDataForUrl('people');
    this.content = response[0].people;
  }

}
