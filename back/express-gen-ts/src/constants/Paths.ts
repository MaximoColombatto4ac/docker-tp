/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Peliculas: {
    Base: '/peliculas', //localhost:3000/peliculas
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/',
    Delete: '/:id',
   Funciones: {
      Base: '/funciones',
      Get: '/',
      GetOne: '/:id',
      Add: '/',
      Update: '/',
      Delete: '/:id',
    }
  },
} as const;
