import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-agendastep',
  templateUrl: './agendastep.component.html',
  styleUrls: ['./agendastep.component.scss']
})
export class AgendastepComponent implements OnInit, OnChanges {

	@Input() nextStep: any;
	@Input() content: any;

  private hasActivity: boolean;
  private hasScenario: boolean;
  private hasDiscussion: boolean;
	private hasReporting: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if(!this.content) return;

    this.hasActivity = this.content.activity !== undefined && this.content.activity.html.length > 0;
    this.hasScenario = this.content.scenario !== undefined && this.content.scenario.length > 0;
    this.hasDiscussion = this.content.discussion !== undefined && this.content.discussion.html.length > 0;
  	this.hasReporting = this.content.reporting !== undefined && this.content.reporting.html.length > 0;

  }

}
