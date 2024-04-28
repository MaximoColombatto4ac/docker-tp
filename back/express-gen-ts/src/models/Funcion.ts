// Importar la interfaz IPelicula
import { IPelicula } from './Pelicula';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'funcionOrObj arg must be a Funcion object ' + 
  'or an object with the appropriate function keys.';

// **** Types **** //

export interface IFuncion {
  id: number;
  pelicula: IPelicula;
  sala: string;
}

// **** Functions **** //

/**
 * Create a new Funcion instance.
 */
function new_(
    pelicula?: IPelicula,
    sala?: string,
    id?: number, // id last because usually set by db
  ): IFuncion {
    return {
      id: (id ?? -1),
      pelicula: (pelicula ?? { id:-1, nombre:"", duracion:""}),
      sala: (sala ?? ""),
    };
  }

/**
 * Check if the parameter meets the criteria to be a function.
 */
function isFuncion(arg: unknown): arg is IFuncion {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'pelicula' in arg && typeof arg.pelicula === 'object' && 
    'sala' in arg && typeof arg.sala === 'string'
  );
}

// **** Export default **** //

export default {
  new: new_,
  isFuncion,
} as const;
