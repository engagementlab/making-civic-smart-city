import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'learn-more-btn',
  templateUrl: './learn-more-btn.component.html',
  styleUrls: ['./learn-more-btn.component.scss']
})
export class LearnMoreBtnComponent implements OnInit {

	@Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
