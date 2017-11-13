import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { EducationComponent } from './sections/education/education.component';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    EducationComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
