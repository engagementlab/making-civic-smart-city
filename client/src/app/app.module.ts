import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Services
import { RouterStateService } from './routerstate.service';

// NPM
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './cdn.config';
export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CdnImageComponent } from './cdn-image/cdn-image.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';
import { PlaybookComponent } from './playbook/playbook.component';
import { LearnMoreBtnComponent } from './learn-more-btn/learn-more-btn.component';
import { WorkshopComponent } from './workshop/workshop.component';

// App routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playbook', component: PlaybookComponent, data: { offwhite: true } },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'cities', component: CitiesComponent, data: { offwhite: true } }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ButtonComponent,
    CdnImageComponent,
    HomeComponent,
    NavComponent,
    CitiesComponent,
    CityComponent,
    PlaybookComponent,
    LearnMoreBtnComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CloudinaryModule.forRoot(cloudinary, config),
    RouterModule.forRoot(routes),
    ScrollToModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [RouterStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  