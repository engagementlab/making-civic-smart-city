import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

	@ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
	elementPosition: any;

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop

	}

	@HostListener('window:scroll', ['$event'])
  handleScroll() {

		const windowScroll = window.pageYOffset;
		this.sticky = windowScroll >= this.elementPosition;
	}

  public triggerScrollTo(name: string) {
    
    this._scrollToService
      .scrollTo({
        target: name,
        offset: -100,
        duration: 1700
      });

  }


}
