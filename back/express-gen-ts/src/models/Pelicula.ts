import moment from 'moment';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must be a string or an object ' + 
  'with the appropriate movie keys.';


// **** Types **** //

export interface IPelicula {
  id: number;
  nombre: string;
  duracion: string;
}


// **** Functions **** //

/**
 * Create a new Pelicula.
 */
function new_(
  nombre?: string,
  duracion?: string,
  id?: number, // id last because usually set by db
): IPelicula {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    duracion: (duracion ?? ""),
  };
}

/**
 * Get movie instance from object.
 */
function from(param: object): IPelicula {
  if (!isPelicula(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IPelicula;
  return new_(p.nombre, p.duracion, p.id);
}

/**
 * Check if the parameter meets the criteria to be a movie.
 */
function isPelicula(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string' && 
    'duracion' in arg && typeof arg.duracion === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isPelicula,
} as const;
