import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import * as _ from 'underscore';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

	public stepId: string;
	public nextStep: string;

	public sections: any[];
  public content: any;

  private stepIndex: number;

  constructor(public _dataSvc: DataService, private _scrollToService: ScrollToService, private route: ActivatedRoute, private router: Router) { 

  	this._dataSvc.getFilteredDataForUrl('agenda', 'name%20key').subscribe(items => {

  		this.sections = items;
	    this.stepIndex = this.sections.findIndex((section) => { return section.key === this.stepId });
			
			// Set progress bar    
			let progress = document.getElementById('progress');
			if(this.stepIndex > 0) {
				let width = 20*(this.stepIndex-1);
				let newWidth = (20*this.stepIndex)+1;
				progress.style.width = width+1 + '%';

		    TweenLite.to(progress, 1, {width: newWidth+'%', delay:1.3, ease:Quad.easeOut})
			}

  	});

		this.route.params.subscribe(params => {

      this.stepId = params['step'];  	

	    this._scrollToService
	      .scrollTo({
	        target: 'top',
	        easing: 'easeOutElastic',
	        duration: 2000
	      });

			this._dataSvc.getDataForUrl('agenda/'+this.stepId).subscribe(response => {

				this.content = response;
	    
	    });

    });

  }

  public getNextStep() {

  	if(!this.sections) return;

  	return this.sections[this.stepIndex+1];

  }

  public changeStep(step) {

	  this.router.navigateByUrl(this.router.url.replace(this.stepId, step));

	}

  ngOnInit() {

  }

}
