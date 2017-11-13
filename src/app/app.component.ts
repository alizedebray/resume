import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('navbarStyle', [
      state('transparent', style({
        backgroundColor: 'transparent',
        boxShadow: "none"
      })),
      state('white',   style({
        backgroundColor: '#fff',
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      })),
      transition('white => transparent', animate('250ms ease-in-out')),
      transition('transparent => white', animate('250ms ease-in-out'))
    ])
  ]
})

export class AppComponent implements OnInit {
  navbarStyle: string = "white";
  navbarCollapsed: boolean = true;

  ngOnInit() {
    this.setNavbarStyle();
  }

  @HostListener("window:scroll", [])
  setNavbarStyle() {
    let scrollValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollValue > 100) {
      this.navbarStyle = "white";
    } else if (this.navbarStyle && scrollValue < 10 && this.navbarCollapsed) {
      this.navbarStyle = "transparent";
    }
  }

  toggleNavbarStyle() {
    this.navbarCollapsed = !this.navbarCollapsed;
    if(!this.navbarCollapsed){
      this.navbarStyle = "white";
    } else {
      this.setNavbarStyle();
    }
  }
}
