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

// Services
import { RouterStateService } from './routerstate.service';

// NPM
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './cdn.config';
export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// App routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ButtonComponent,
    CdnImageComponent,
    HomeComponent
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
  