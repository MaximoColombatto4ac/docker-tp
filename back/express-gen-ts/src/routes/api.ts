import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Pelicula from '@src/models/Pelicula';
import Funcion from '@src/models/Funcion';
import PelIculaRoutes from './PelIculaRoutes';
import FuncionRoutes from './FuncionRoutes';

// **** Variables **** //

const apiRouter = Router(), //localhost:3000/
  validate = jetValidator();


// ** Add peliculaRouter ** //

const peliculaRouter = Router();

// Get one Peliculas
peliculaRouter.get(
  Paths.Peliculas.GetOne, //localhost:3000/peliculas/5435345
  PelIculaRoutes.getOne
)

// Get all Peliculas
peliculaRouter.get(
  Paths.Peliculas.Get, 
  PelIculaRoutes.getAll,
);

// Add one user
peliculaRouter.post(
  Paths.Peliculas.Add,
  validate(['pelicula', Pelicula.isPelicula]),
  PelIculaRoutes.add,
);

// Update one user
peliculaRouter.put(
  Paths.Peliculas.Update,
  PelIculaRoutes.update,
);

// Delete one user
peliculaRouter.delete(
  Paths.Peliculas.Delete,
  PelIculaRoutes.delete,
);

// ** Add funcionRouter ** //

const funcionRouter = Router();

// Get one Funcion
funcionRouter.get(
  Paths.Peliculas.Funciones.GetOne,
  FuncionRoutes.getOne
)

// Get all Funciones
funcionRouter.get(
  Paths.Peliculas.Funciones.Get,
  FuncionRoutes.getAll,
);

// Add one Funcion
funcionRouter.post(
  Paths.Peliculas.Funciones.Add,
  FuncionRoutes.add,
);

// Update one Funcion
funcionRouter.put(
  Paths.Peliculas.Funciones.Update,
  FuncionRoutes.update,
);

// Delete one Funcion
funcionRouter.delete(
  Paths.Peliculas.Funciones.Delete,
  FuncionRoutes.delete,
);


// Add peliculaRouter
apiRouter.use(Paths.Peliculas.Base, peliculaRouter); //localhost:3000/peliculas


// Add funcionRouter
apiRouter.use(Paths.Peliculas.Funciones.Base, funcionRouter);


// **** Export default **** //

export default apiRouter;
