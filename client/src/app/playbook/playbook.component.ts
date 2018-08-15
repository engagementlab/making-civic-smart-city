import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.scss']
})
export class PlaybookComponent implements OnInit {

	public playTitles: string[] = [
		"Embrace \"Smart Cities\"",
		"Cultivate Local Innovation Ecosystem",
		"Invite Public Influence",
		"Question Data",
		"Imagine The Possible"
	];

	// @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
	elementPosition: any;

  public triggerScrollTo(name: string) {
    
    this._scrollToService
      .scrollTo({
        target: 'play_'+name,
        easing: 'easeOutElastic',
        offset: -100,
        duration: 1000
      });

  }

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.elementPosition = this.menuElement.nativeElement.offsetTop

	}

	/*@HostListener('window:scroll', ['$event'])
  handleScroll() {

		const windowScroll = window.pageYOffset;
		this.sticky = windowScroll >= this.elementPosition;
		console.log(this.sticky)
	}*/
}
