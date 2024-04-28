import { IPelicula } from '@src/models/Pelicula';
import { IFuncion } from "@src/models/Funcion";
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';

// **** Functions **** //

/**
 * Get one película.
 */
async function getOne(id: number): Promise<IFuncion | null> {
  const db = await orm.openDb();
  for (const funcion of db.funciones) {
    if (funcion.id == id) {
      return funcion;
    }
  }
  return null;
}

/**
 * See if a película with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const funcion of db.funciones) {
    if (funcion.id == id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all películas.
 */
async function getAll(): Promise<IFuncion[]> {
  const db = await orm.openDb();
  return db.funciones;
}

/**
 * Add one película.
 */
async function add(funcion: IFuncion): Promise<void> {
  const db = await orm.openDb();
  funcion.id = getRandomInt();
  db.funciones.push(funcion);
  return orm.saveDb(db);
}

/**
 * Update a película.
 */
async function update(funcion: IFuncion): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.funciones.length; i++) {
    if (db.funciones[i].id === funcion.id) {
      const dbIFunciones = db.funciones[i];
      db.funciones[i] = {
        ...dbIFunciones,
        pelicula: funcion.pelicula,
        sala: funcion.sala,
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
  for (let i = 0; i < db.funciones.length; i++) {
    if (db.funciones[i].id === id) {
      db.funciones.splice(i, 1);
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
