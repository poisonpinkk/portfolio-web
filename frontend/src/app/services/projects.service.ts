import { Injectable } from '@angular/core';
import { Project } from '../models/project.models';
@Injectable({
  providedIn: 'root'//Crea una única instancia de este servicio y haz que esté disponible para toda la aplicación
})
export class ProjectsService {
projects: Project[] = [
  {
    title: 'Proyecto 1',
    description: 'Aplicación web desarrollada para resolver un problema concreto.',
    technologies: 'Angular · TypeScript · SCSS',
    link: 'https://github.com/',
    image: 'proyecto-1.png'
  },
  {
    title: 'Proyecto 2',
    description: 'Otro proyecto desarrollado durante mi proceso de aprendizaje.',
    technologies: 'Python · Django · SQLite',
    link: 'https://github.com/',
    image: 'proyecto-2.png'
  },
  {
    title: 'Proyecto 3',
    description: 'Proyecto personal que demuestra mis habilidades en desarrollo web.',
    technologies: 'React · JavaScript · CSS',
    link: 'https://github.com/',
    image: 'proyecto-1.png'
  }
];
  constructor() { }
}
