import { IPelicula } from '@src/models/Pelicula';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';

// **** Functions **** //

/**
 * Get one película.
 */
async function getOne(nombre: string): Promise<IPelicula | null> {
  const db = await orm.openDb();
  for (const pelicula of db.peliculas) {
    if (pelicula.nombre === nombre) {
      return pelicula;
    }
  }
  return null;
}

/**
 * See if a película with the given id exists.
 */
async function persists(id: number): Promise<IPelicula | null> {
  const db = await orm.openDb();
  for (const pelicula of db.peliculas) {
    if (pelicula.id == id) {
      return pelicula;
    }
  }
  return null;
}

/**
 * Get all películas.
 */
async function getAll(): Promise<IPelicula[]> {
  const db = await orm.openDb();
  return db.peliculas;
}

/**
 * Add one película.
 */
async function add(pelicula: IPelicula): Promise<void> {
  const db = await orm.openDb();
  pelicula.id = getRandomInt();
  db.peliculas.push(pelicula);
  return orm.saveDb(db);
}

/**
 * Update a película.
 */
async function update(pelicula: IPelicula): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.peliculas.length; i++) {
    if (db.peliculas[i].id === pelicula.id) {
      const dbIPelicula = db.peliculas[i];
      db.peliculas[i] = {
        ...dbIPelicula,
        nombre: pelicula.nombre,
        duracion: pelicula.duracion,
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one película.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.peliculas.length; i++) {
    if (db.peliculas[i].id === id) {
      db.peliculas.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
