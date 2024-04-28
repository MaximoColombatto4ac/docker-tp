import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Funcion } from '../../models/funcion';
import { FuncionService } from '../../services/funcion.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent{
  listaFunciones: Funcion[] = [];
  pelicula!: Pelicula;
  peliculaService: PeliculaService = inject(PeliculaService);
  funcionService: FuncionService = inject(FuncionService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.peliculaService.obtenerPelicula(params['id']).subscribe((data) => {
        this.pelicula = data;
        this.funcionService.obtenerFunciones().subscribe((data) => {
          this.listaFunciones = data;
          console.log('funciones = ', data);
          this.cargarDatos();
        });
      });
    });
  }
  cargarDatos() {
    this.listaFunciones = this.listaFunciones.filter(element => {
        return element.pelicula.id === this.pelicula.id;
    });
    console.log('funciones filtradas = ', this.listaFunciones);
}
  agregarFuncion(idPelicula: number) {
    this.router.navigate(['/detalle/agregar', idPelicula]);
  }
  editarFuncion(idPelicula: number, idFuncion: number) {
    this.router.navigate(['/detalle/editar', idPelicula, idFuncion]);
  }
  eliminarFuncion(id: number) {
    this.funcionService.borrarFuncion(id).subscribe((data) => {
      this.listaFunciones = this.listaFunciones.filter(element => element.id !== id);
    });
  }
}
