import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

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

  constructor(
    private _scrollToSvc: ScrollToService, private elementRef: ElementRef) { }

  ngOnInit() {

  }
  ngAfterViewInit() {

    if(!this.parentElement) return;

    let btn = this.elementRef.nativeElement.getElementsByClassName('btn')[0];

    document.getElementById(this.parentElement).addEventListener("mouseover", (e) => {
      btn.classList.add('hover');
    });
    document.getElementById(this.parentElement).addEventListener("mouseleave", (e) => {
      btn.classList.remove('hover');
    });

  }
  
  public scrollToTop() {
      this._scrollToSvc.scrollTo({
          target: document.getElementById('top'),
          offset: 0,
          easing: 'easeOutQuint',
          duration: 700,
      });
  }

}
