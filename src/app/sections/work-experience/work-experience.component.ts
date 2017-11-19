import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { Experience } from '../../models/experience';

@Component({
  selector: 'work-experience-section',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent {

  constructor(private renderer:Renderer) {}

  @ViewChild('prevButton') prevButton:ElementRef;
  @ViewChild('nextButton') nextButton:ElementRef;

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  swipeNext(){
    this.renderer.invokeElementMethod(this.nextButton.nativeElement, 
      'dispatchEvent', 
      [new MouseEvent('click', { bubbles: true, cancelable: true })]);
  }

  swipePrev(){
    this.renderer.invokeElementMethod(this.prevButton.nativeElement, 
      'dispatchEvent', 
      [new MouseEvent('click', { bubbles: true, cancelable: true })]);
  }

  workExperiences: Experience[] = [
    { 
      "title": "Front-end developer",
      "provider": "The New Luncher",
      "description": "The New Luncher is a service which allows parents to provide lunch boxes to their children at school.",
      "achievements": [
        "Participated in the launch of the startup",
        "Designed and developed an AngularJS web application",
        "Conceived a user experience in accordance with the brand’s image"
      ],
      "place": "SINGAPORE",
      "dates": "2016 - 2017",
      "length": "5 months"
    },
    {
      "title": "Front-end development intern",
      "provider": "SeeChic",
      "description": "Seechic is an online contact lenses and sunglasses retailer.",
      "achievements": [
        "Participated in the redesign of the whole website",
        "Design and developed the front-end part of a new interface",
        "Managed the content’s production",
        "Set up an automatic emailing engine"
      ],
      "place": "SINGAPORE",
      "dates": "2016",
      "length": "7 months"
    },
    {
      "title": "Salesperson",
      "provider": "IKEA",
      "description": "IKEA is the world’s largest furniture retailer.",
      "achievements": [
        "Advised clients",
        "Organised and replenished the home textiles department "
      ],
      "place": "Lille, FRANCE",
      "dates": "2015 - 2016",
      "length": "3 months"
    },
    {
      "title": "Front-end development intern",
      "provider": "Orange",
      "description": "Orange is the French telecommunications’ leader.",
      "achievements": [
        "Participated in the improvement of the administration of professional clients",
        "Developed the front-end part of an interface"
      ],
      "place": "Lille, FRANCE",
      "dates": "2015",
      "length": "3 months"
    },
    {
      "title": "Web development volunteer",
      "provider": "Com&Web",
      "description": "Com&Web is a charity that sells websites and communication supports  to collect money for the disadvantages.",
      "achievements": [
        "Designed and developed 6-pages showcase websites"
      ],
      "place": "Lille, FRANCE",
      "dates": "2015",
      "length": "5 months"
    },
    {
      "title": "Sales intern",
      "provider": "Darty",
      "description": "Darty is the French leading household appliance store chain.",
      "achievements": [
        "Pursued a sales methods training",
        "Advised clients",
        "Organised and replenished the small appliance department"
      ],
      "place": "Coignières, FRANCE",
      "dates": "2014",
      "length": "2 months"
    },
    {
      "title": "Mystery customer",
      "provider": "Orphée",
      "description": "Orphée is a company specialised in the assessment of user experience.",
      "achievements": [
        "Evaluated customer service within a long-term study concerning one of French leading car dealers"
      ],
      "place": "Suresnes, FRANCE",
      "dates": "2013",
      "length": "5 months"
    }
  ];
}
