import { Component } from '@angular/core';
import { Experience } from '../../models/experience';

@Component({
  selector: 'education-section',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent {
  educationExperiences: Experience[] = [{ 
    "title": "Engineering master’s degree",
    "provider": "Iteem - Centrale Lille",
    "description": "Preparing a master’s degree in industrial and entrepreneurial engineering.",
    "place": "Lille, FRANCE",
    "dates": "2013 - 2018"
  },{ 
    "title": "Management master’s degree",
    "provider": "Skema Business School",
    "description": "Preparing a master’s degree in project and programme management & business development.",
    "place": "Lille, FRANCE",
    "dates": "2017 - 2018"
  }];
}
