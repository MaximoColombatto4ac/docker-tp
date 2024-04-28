import FuncionRepo from '@src/repos/FuncionRepo';
import { IFuncion } from '@src/models/Funcion';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IPelicula } from '@src/models/Pelicula';

// **** Variables **** //

export const FUNCION_NOT_FOUND_ERR = 'Funcion not found';

// **** Functions **** //

/**
 * Get all películas.
 */
function getOne(id: number): Promise<IFuncion | null> {
  return FuncionRepo.getOne(id);
}


/**
 * Get all películas.
 */
function getAll(): Promise<IFuncion[]> {
  return FuncionRepo.getAll();
}

/**
 * Add one película.
 */
function addOne(pelicula: IFuncion): Promise<void> {
  return FuncionRepo.add(pelicula);
}

/**
 * Update one película.
 */
async function updateOne(pelicula: IFuncion): Promise<void> {
  const persists = await FuncionRepo.persists(pelicula.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      FUNCION_NOT_FOUND_ERR,
    );
  }
  // Return película
  return FuncionRepo.update(pelicula);
}

/**
 * Delete a película by its id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await FuncionRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      FUNCION_NOT_FOUND_ERR,
    );
  }
  // Delete película
  return FuncionRepo.delete(id);
}

// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
