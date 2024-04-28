import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { FormularioPeliculaComponent } from './components/formulario-pelicula/formulario-pelicula.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormularioFuncionComponent } from './components/formulario-funcion/formulario-funcion.component';

export const routes: Routes = [
    {
        path: '', // al no poner ruta, arranca mostrandose el componente
        component: InicioComponent,
        title: 'Pagina Inicio'
    },
    {
      path: 'agregar',
      component: FormularioPeliculaComponent,
      title: 'Agregar Pelicula'
    },
    {
      path: 'editar/:id',
      component: FormularioPeliculaComponent,
      title: 'Editar Pelicula'
    },
    {
      path: 'detalle/:id',
      component: DetalleComponent,
      title: 'Pagina Funciones'
    },
    {
      path:'detalle/agregar/:idPelicula',
      component: FormularioFuncionComponent,
      title: 'Agregar Funcion'
    },
    {
      path:'detalle/editar/:idPelicula/:funcionId',
      component: FormularioFuncionComponent,
      title: 'Editar Funcion'
    },
];
