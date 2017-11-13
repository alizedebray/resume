import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('navbarState', [
      state('onTop', style({
        backgroundColor: 'transparent',
        boxShadow: "none"
      })),
      state('notOnTop',   style({
        backgroundColor: '#fff',
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      })),
      transition('notOnTop => onTop', animate('250ms ease-in-out')),
      transition('onTop => notOnTop', animate('250ms ease-in-out'))
    ])
  ]
})

export class AppComponent implements OnInit {
  navbarState: string = "notOnTop";

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.navbarState = "notOnTop";
    } else if (this.navbarState && number < 10) {
      this.navbarState = "onTop";
    }
  }

}
