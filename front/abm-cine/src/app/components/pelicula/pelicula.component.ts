import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";
import { FuncionService } from '../../services/funcion.service';
import { Router } from '@angular/router';
import { Funcion } from '../../models/funcion';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  listaPeliculas: Pelicula[] = [];
  servicio: FuncionService = inject(FuncionService);
  constructor(private router: Router, private peliculaService: PeliculaService){
    this.obtenerPeliculas()}


  obtenerPeliculas(){
    this.peliculaService.obtenerPeliculas().subscribe((data: Pelicula[]) => {
      this.listaPeliculas = data;
    })
  }

  eliminarPelicula(id: number) {
      this.peliculaService.borrarPelicula(id).subscribe(data => {
        this.servicio.obtenerFunciones().subscribe(data => {
          this.cargarDatos(data, id).forEach(funcion => {
            this.servicio.borrarFuncion(funcion.id).subscribe()
          });
            this.obtenerPeliculas()
        })
      });
      
  }
  cargarDatos(listaFunciones: Funcion[], id: number) {
    listaFunciones = listaFunciones.filter(element => {
        return element.pelicula.id === id;
    });
    return listaFunciones;
  }

  editarPelicula(id: number) {
      this.router.navigate(['/editar', id]);
  }

  verMas(id: number) {
      this.router.navigate(['/detalle', id]);
  }
}
