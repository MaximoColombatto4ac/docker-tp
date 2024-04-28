import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from "../pelicula/pelicula.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, PeliculaComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
}
