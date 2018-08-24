import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

	public stepId: string;
	public sections: object[] = [
		{key: 'intro', label: "Introduction"},
		{key: 'framing', label: "Framing the Smart City"},
		{key: 'identify', label: "Identify Values"},
		{key: 'plays', label: "Plays"},
		{key: 'prototyping', label: "Prototyping"},
		{key: 'remarks', label: "Concluding Remarks"}
	];

  constructor(public _dataSvc: DataService, private route: ActivatedRoute, private router: Router) { 

		
		this.route.params.subscribe(params => {

      this.stepId = params['step'];

			this._dataSvc.getDataForUrl('agenda/'+this.stepId).subscribe(response => {
	      
	      debugger;
	    
	    });

    });

  }

  ngOnInit() {
  }

  public changeStep(step) {

	  this.router.navigateByUrl(this.router.url.replace(this.stepId, step));

	}

}
