import { Component, Input } from '@angular/core';
import { Experience } from '../../models/experience';

@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.sass']
})
export class ExperienceCardComponent {
  @Input() experience: Experience;
}
