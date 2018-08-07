import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CdnImageComponent } from './cdn-image/cdn-image.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';

// Services
import { RouterStateService } from './routerstate.service';

// NPM
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './cdn.config';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';
export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// App routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
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
    CityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CloudinaryModule.forRoot(cloudinary, config),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [RouterStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  