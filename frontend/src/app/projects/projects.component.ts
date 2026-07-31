import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
  {
    title: 'Proyecto 1',
    description: 'Aplicación web desarrollada para resolver un problema concreto.',
    technologies: 'Angular · TypeScript · SCSS'
  },
  {
    title: 'Proyecto 2',
    description: 'Otro proyecto desarrollado durante mi proceso de aprendizaje.',
    technologies: 'Python · Django · SQLite'
  },
  {
    title: 'Proyecto 3',
    description: 'Proyecto personal que demuestra mis habilidades en desarrollo web.',
    technologies: 'React · JavaScript · CSS'
  }
];
}
