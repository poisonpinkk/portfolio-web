import { Component ,Input} from '@angular/core';
import { Project } from '../models/project.models';
@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input({ required: true })
project!: Project;
}
