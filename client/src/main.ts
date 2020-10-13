import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

declare const iconSvc: any;

if (environment.production) {
  enableProdMode();

  // GA tracking
  document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-64617433-9"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date()); gtag(\'config\', \'UA-64617433-9\'); </script>');

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
