import { Pelicula } from "./pelicula";

export interface Funcion {
    id: number;
    pelicula: Pelicula;
    horario: number;
    sala: string;
}
