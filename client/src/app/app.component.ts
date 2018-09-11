import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute, ActivatedRouteSnapshot, NavigationStart } from '@angular/router';

import { environment } from '../environments/environment';

import { TweenLite } from "gsap";
import * as Rellax  from "rellax";
import * as detect from 'detect-browser';
import { fadeInAnimation } from './animations/fade';
import { RouterStateService } from './routerstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent {

  public isQABuild: boolean;

	constructor(private appRouterState: RouterStateService, private renderer: Renderer2, private router: Router, private route: ActivatedRoute) {

		/*this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {

          this.renderer.removeClass(document.body, 'offwhite');
          let currentUrlSlug = event.url.slice(1)
          
          if (currentUrlSlug === 'cities')
            this.renderer.addClass(document.body, 'offwhite');
        }
      });*/

	}

  ngOnInit() {

    // Browser warning 
    const browser = detect.detect();
    console.log(browser.name, browser.version)
    let unsupported = (browser.name === 'ie') ||
                      (browser.name === 'firefox' && parseInt(browser.version) < 52) ||
                      (browser.name === 'chrome' && parseInt(browser.version) < 57) || 
                      (browser.name === 'android' && parseInt(browser.version) < 67) || 
                      (browser.name === 'edge' && parseInt(browser.version) < 16) || 
                      ((browser.name === 'safari' || browser.name === 'ios') && parseInt(browser.version) < 10);
    
    if(unsupported) {
      let warn = document.getElementById('browser-warn');
      warn.style.display = 'block';      
    }
    
    this.isQABuild = environment.qa;
    
    if(!this.isQABuild) return;
    setTimeout(() => {

      TweenLite.fromTo(document.getElementById('qa-build'), .7, {autoAlpha:0, bottom:'-100%'}, {autoAlpha:1, bottom:0, ease:Expo.easeOut});
      TweenLite.fromTo(document.querySelector('#qa-build img'), .7, {autoAlpha:0, scale:0}, {autoAlpha:1, scale:1, delay:.7, ease:Back.easeOut});
      TweenLite.fromTo(document.querySelector('#qa-build #text'), .7, {autoAlpha:0, left:'-100%'}, {autoAlpha:1, left:0, delay:.9, ease:Back.easeOut});
      TweenLite.fromTo(document.getElementById('qa-build'), .7, {autoAlpha:1, bottom:0}, {autoAlpha:0, bottom:'-100%', display:'none', delay:4, ease:Expo.easeIn});
  
    }, 2000);

  }

  public hideWarning() {

    document.getElementById('browser-warn').style.display = 'none';

  }
}
