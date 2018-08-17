import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	@Input() label: string;
  @Input() class: string;
	@Input() route: string;
	@Input() href: string;
	@Input() ariaLabel: string;
  @Input() newWindow: boolean;
	@Input() download: boolean = false;
  constructor() { }

  ngOnInit() {
  	
  }

}
