import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { SkillsComponent } from './sections/skills/skills.component';
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
    SkillsComponent,
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
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
