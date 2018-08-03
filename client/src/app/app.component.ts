import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRouteSnapshot } from '@angular/router';

import { TweenLite } from "gsap";
import * as Rellax  from "rellax";
import { slideInOutAnimation } from './animations/slide';
import { RouterStateService } from './routerstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInOutAnimation]
})
export class AppComponent {
  
  currentState: number = 0;
	lastPage: string;
	lastState: string;

	getState(outlet: RouterOutlet) {
	    let state: string = (<ActivatedRouteSnapshot>outlet.activatedRoute.snapshot)['_routerState'].url;
	    console.log(outlet)

	    if (this.lastState !== state) {
      
        let dir: string = this.appRouterState.getDirection(state);

        console.log(dir)
        if (dir === "f")
          this.currentState++;
        else
          this.currentState--;
        
        this.lastPage= state;
	    
	    }

	    return this.currentState;
	}

	public activateRouter(event) {

		// debugger;

	}

	constructor(private appRouterState: RouterStateService) {

	}

  ngOnInit() {

  	this.appRouterState.loadRouting();


	  // var rellax = new Rellax('.rellax', {horizontal: true, vertical: true});
  }
}
