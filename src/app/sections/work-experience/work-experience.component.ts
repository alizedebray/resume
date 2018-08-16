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
      "title": "Business analyst",
      "provider": "Amadeus",
      "description": "Amadeus is the world's leading provider of distribution solutions for the travel and tourism industry.",
      "achievements": [
        "Designed features to enhance an existing web application based on customer needs"
      ],
      "place": "Nice, FRANCE",
      "dates": "2018",
      "length": "Current"
    },
    { 
      "title": "Front-end developer",
      "provider": "The New Luncher",
      "description": "The New Luncher is a start-up that allows parents to order lunch boxes for their children at school.",
      "achievements": [
        "Participated in the launch of the start-up",
        "Conceived an online user experience in line with the brand image",
        "Designed and developed an AngularJS web application"
      ],
      "place": "SINGAPORE",
      "dates": "2016 - 2017",
      "length": "5 months"
    },
    {
      "title": "Front-end development intern",
      "provider": "SeeChic",
      "description": "SeeChic is a start-up that sells contact lenses and sunglasses online.",
      "achievements": [
        "Participated in the redesign of a website in its entirety",
        "Enhanced an online user experience to increase conversion rate",
        "Designed and developed the front-end of a web interface",
        "Managed the production of content"
      ],
      "place": "SINGAPORE",
      "dates": "2016",
      "length": "7 months"
    },
    {
      "title": "Salesperson",
      "provider": "IKEA",
      "description": "IKEA is the largest furniture retailer in the world.",
      "achievements": [
        "Advised clients on home textiles",
        "Took care of customer journey in my area"
      ],
      "place": "Lille, FRANCE",
      "dates": "2015",
      "length": "3 months"
    },
    {
      "title": "Front-end development intern",
      "provider": "Orange",
      "description": "Orange is the French leader in telecommunications.",
      "achievements": [
        "Helped improve the administration of business clients by internal users",
        "Developed the front-end of a web application"
      ],
      "place": "Lille, FRANCE",
      "dates": "2015",
      "length": "3 months"
    },
    {
      "title": "Software development volunteer ",
      "provider": "Com&Web",
      "description": "Com&Web is a charity that sells websites and communication materials to raise funds for disadvantaged people.",
      "achievements": [
        "Designed and developed showcase websites to attract potential clients for small businesses"
      ],
      "place": "Lille, FRANCE",
      "dates": "2015",
      "length": "5 months"
    },
    {
      "title": "Sales intern",
      "provider": "Darty",
      "description": "Darty is the leading French chain of home appliance stores.",
      "achievements": [
        "Pursued a training in sales methods",
        "Pursued a training in sales methods",
        "Took care of the customer journey in my area"
      ],
      "place": "Paris, FRANCE",
      "dates": "2014",
      "length": "2 months"
    },
    {
      "title": "Mystery customer",
      "provider": "Orphée",
      "description": "Orphée is a company specializing in the evaluation of the user experience.",
      "achievements": [
        "Evaluated the customer service of one of the leading French car dealers"
      ],
      "place": "Paris, FRANCE",
      "dates": "2013",
      "length": "5 months"
    }
  ];
}
