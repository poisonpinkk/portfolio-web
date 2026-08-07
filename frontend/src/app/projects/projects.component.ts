import { Component,OnInit } from '@angular/core';
import { Project } from './../models/project.models';
import { ProjectsService } from '../services/projects.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  // Aquí almacenaremos la lista de proyectos que obtiene este componente
  // desde el servicio. Inicialmente es un arreglo vacío hasta que Angular
  // ejecuta ngOnInit().
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // ngOnInit() se ejecuta cuando el componente ya fue creado.
    // En este momento el servicio ya está disponible, por lo que
    // podemos obtener los proyectos y asignarlos a la propiedad
    // que utiliza el HTML para mostrarlos.
  this.projects = this.projectsService.getProjects();
  }
}
