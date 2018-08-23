import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {

    // if(this.next === true) {
      let btn = document.querySelector('.btn.next');
      btn.parentNode.parentNode.parentElement.addEventListener("mouseover", (e) => {
        btn.classList.add('hover');
      });
      btn.parentNode.parentNode.parentElement.addEventListener("mouseleave", (e) => {
        console.log('leave')
        btn.classList.remove('hover');
      });
    }
    // }

  }

}
