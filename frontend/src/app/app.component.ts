import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeroComponent} from './hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent, ContactComponent, NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
