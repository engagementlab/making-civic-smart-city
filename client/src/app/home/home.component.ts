import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

import * as Rellax  from 'rellax';
import * as ismobile from 'ismobilejs';

import { create as createDots } from '../dots';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public playTitles: string[] = [
		"Embrace \"Smart Cities\"",
		"Cultivate Local Innovation Ecosystem",
		"Invite Public Influence",
		"Question Data",
		"Imagine The Possible"
	];
	public whitepaperUrl: string;
	public betaBlocksUrl: string;

	@ViewChild('dotsGetStarted') dotsGetStarted: ElementRef
	@ViewChild('dotsPlaybook') dotsPlaybook: ElementRef

	constructor(private _dataSvc: DataService) {}

	ngOnInit() {

		this._dataSvc.whitepaperSubject.subscribe(value => {
			if(!this._dataSvc.whitepaperUrls) return;
			this.whitepaperUrl = this._dataSvc.whitepaperUrls['whitepaperPdf'];
			this.betaBlocksUrl = this._dataSvc.whitepaperUrls['betaBlocksPdf'];

			createDots(document.getElementById('dots'), 4, 1, 100, true);
			// createDots(this.dotsGetStarted.nativeElement, 3, 1, 200);
			createDots(this.dotsPlaybook.nativeElement, 4, 2, 200, true);
		});

		if (!ismobile.phone)
			new Rellax('.img');

	}

}
