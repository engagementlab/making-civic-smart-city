import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";

// Services
import { RouterStateService } from "./routerstate.service";
import { DataService } from "./data.service";
import { PlaysService } from "./plays.service";

// NPM
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { Cloudinary as CloudinaryCore } from "cloudinary-core";
import {
  CloudinaryConfiguration,
  CloudinaryModule,
} from "@cloudinary/angular-5.x";
import cloudinaryConfiguration from "./cdn.config";
export const cloudinary = {
  Cloudinary: CloudinaryCore,
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// App components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CdnImageComponent } from "./cdn-image/cdn-image.component";
import { ButtonComponent } from "./button/button.component";
import { NavComponent } from "./nav/nav.component";
import { CitiesComponent } from "./cities/cities.component";
import { CityComponent } from "./cities/city/city.component";
import { PlaybookComponent } from "./playbook/playbook.component";
import { LearnMoreBtnComponent } from "./learn-more-btn/learn-more-btn.component";
import { WorkshopComponent } from "./workshop/workshop.component";
import { PlayComponent } from "./playbook/play/play.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { AgendastepComponent } from "./agenda/agendastep/agendastep.component";
import { PeopleComponent } from "./about/people/people.component";
import { SplitPipe } from "./split.pipe";

// App routes
export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", redirectTo: "betablocks" },
  { path: "about/who", component: PeopleComponent },
  { path: "betablocks", component: AboutComponent },

  { path: "agenda/:step", component: AgendaComponent },
  { path: "agenda", redirectTo: "agenda/introduction", pathMatch: "full" },

  { path: "cities", component: CitiesComponent },
  { path: "playbook", component: PlaybookComponent },
  { path: "workshop", component: WorkshopComponent },
  { path: "playbook/:key", component: PlayComponent },
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
    WorkshopComponent,
    PlayComponent,
    AgendaComponent,
    AgendastepComponent,
    PeopleComponent,
    SplitPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CloudinaryModule.forRoot(cloudinary, config),
    HttpClientModule,
    RouterModule.forRoot(routes),
    ScrollToModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [RouterStateService, DataService, PlaysService],
  bootstrap: [AppComponent],
})
export class AppModule {}
