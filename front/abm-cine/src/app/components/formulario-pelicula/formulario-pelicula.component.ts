import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-pelicula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
  pelicula: Pelicula;
  modoEditar = false;
  servicio: PeliculaService = inject(PeliculaService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.pelicula = {
      id: -1,
      nombre: "",
      duracion: ""
    }
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.modoEditar = true;
        this.servicio.obtenerPelicula(params['id']).subscribe(data => {
          this.pelicula = data;
        });
      } 
    });
  }

  guardarPelicula(event: Event) {
    event.preventDefault(); //Para que no se recargue la pagina
    if (this.modoEditar) {
      this.servicio.actualizarPelicula(this.pelicula).subscribe(data => {
        this.router.navigate(['/'])
      });
    } else {
      this.servicio.agregarPelicula(this.pelicula).subscribe(data => {
        this.router.navigate(['/'])
      });
    }
    this.router.navigate(['/'])
  }
}
