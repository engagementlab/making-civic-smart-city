import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {

	@Input() label: string;
  @Input() class: string;
	@Input() route: string;
	@Input() href: string;
	@Input() ariaLabel: string;
  @Input() newWindow: boolean;
  @Input() download: boolean = false;
  @Input() top: boolean = false;
	@Input() next: boolean = false;

  @Input() parentElement: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }
  ngAfterViewInit() {

    if(!this.parentElement) return;

    let btn = this.elementRef.nativeElement.getElementsByClassName('btn')[0];
    console.log(document.getElementById(this.parentElement))
    document.getElementById(this.parentElement).addEventListener("mouseover", (e) => {
      btn.classList.add('hover');
    });
    document.getElementById(this.parentElement).addEventListener("mouseleave", (e) => {
      btn.classList.remove('hover');
    });
  }

  }

}
