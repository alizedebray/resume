import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { WorkExperienceComponent } from './sections/work-experience/work-experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ExperienceCardComponent } from './elements/experience-card/experience-card.component';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactComponent,
    ExperienceCardComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6dE6qBeExbMNGZB9HwJUJZ_STxQxd8e0'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
