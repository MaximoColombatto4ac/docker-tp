import PeliculaRepo from '@src/repos/PeliculaRepo';
import { IPelicula } from '@src/models/Pelicula';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

export const PELICULA_NOT_FOUND_ERR = 'Pelicula not found';

// **** Functions **** //


/**
 * Get one película.
 */
function getOne(id: number): Promise<IPelicula | null> {
  return PeliculaRepo.persists(id);
}

/**
 * Get all películas.
 */
function getAll(): Promise<IPelicula[]> {
  return PeliculaRepo.getAll();
}

/**
 * Add one película.
 */
function addOne(pelicula: IPelicula): Promise<void> {
  return PeliculaRepo.add(pelicula);
}

/**
 * Update one película.
 */
async function updateOne(pelicula: IPelicula): Promise<void> {
  const persists = await PeliculaRepo.persists(pelicula.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
  // Return película
  return PeliculaRepo.update(pelicula);
}

/**
 * Delete a película by its id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await PeliculaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
  // Delete película
  return PeliculaRepo.delete(id);
}

// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
