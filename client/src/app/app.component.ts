import { Component } from '@angular/core';
import { TweenLite } from "gsap";
import * as Rellax  from "rellax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli-workspace-example';

  ngOnInit() {
	  var rellax = new Rellax('.rellax', {horizontal: true, vertical: true});
  }
}
