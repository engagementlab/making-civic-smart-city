import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agendastep',
  templateUrl: './agendastep.component.html',
  styleUrls: ['./agendastep.component.scss']
})
export class AgendastepComponent implements OnInit {

	@Input() stepId: string;

  constructor() { }

  ngOnInit() {
  }

}
