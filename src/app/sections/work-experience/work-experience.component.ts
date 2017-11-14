import { Component } from '@angular/core';

@Component({
  selector: 'work-experience-section',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent {
  workExperiences = [
    {
      "job_title": "Front-end developer",
      "company_name": "The New Luncher",
      "company_description": "The New Luncher is a service which allow parents to provide lunch boxes to their children.",
      "achievements": [
        "Participated in the startup’s launch",
        "Developed and designed an AngularJS web application",
        "Conceived an user experience in accordance with the brand’s image"
      ]
    },
    {
      "job_title": "Front-end development intern",
      "company_name": "SeeChic",
      "company_description": "Seechic is an online contact lenses’ and sunglasses’ retailer.",
      "achievements": [
        "Participated in the redesign of the whole website",
        "Design and developed the front-end part of a new interface",
        "Managed the content’s production",
        "Set up an automatic emailing engine"
      ]
    },
    {
      "job_title": "Salesperson",
      "company_name": "IKEA",
      "company_description": "IKEA is the world’s largest furniture retailer.",
      "achievements": [
        "Advised clients",
        "Organised and replenished the home textiles department "
      ]
    },
    {
      "job_title": "Front-end development intern",
      "company_name": "Orange",
      "company_description": "Orange is the French telecommunications’ leader.",
      "achievements": [
        "Participated in the improvement of the administration of professional clients",
        "Developed the front-end part of an interface"
      ]
    },
    {
      "job_title": "Web development volunteer",
      "company_name": "Com&Web",
      "company_description": "Com&Web is a charity that sells websites and communication supports  to collect money for the disadvantages.",
      "achievements": [
        "Designed and developed 6-pages showcase websites"
      ]
    },
    {
      "job_title": "Sales intern",
      "company_name": "Darty",
      "company_description": "Darty is the French leading household appliance store chain.",
      "achievements": [
        "Pursued a sales methods training",
        "Advised clients",
        "Organised and replenished the small appliance department"
      ]
    },
    {
      "job_title": "Mystery customer",
      "company_name": "Orphée",
      "company_description": "Orphée is a company specialised in the assessment of user experience.",
      "achievements": [
        "Evaluated customer service within a long-term study concerning one of French leading car dealers"
      ]
    }
  ]
}
