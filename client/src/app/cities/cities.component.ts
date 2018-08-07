import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

	public cities: object[] = 
  [
    {key: 'boston', label: 'Boston'},
    {key: 'nyc', label: 'New York'},
    {key: 'chicago', label: 'Chicago'},
    {key: 'la', label: 'Los Angeles'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
