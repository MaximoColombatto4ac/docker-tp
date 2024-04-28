import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import FuncionService from '@src/services/FuncionService';
import { IFuncion } from '@src/models/Funcion';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get one película.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const pelicula = await FuncionService.getOne(id);
  return res.status(HttpStatusCodes.OK).json(pelicula);
}

/**
 * Get all películas.
 */
async function getAll(_: IReq, res: IRes) {
  const funciones = await FuncionService.getAll();
  return res.status(HttpStatusCodes.OK).json( funciones );
}

/**
 * Add one película.
 */
async function add(req: IReq<{ funcion: IFuncion }>, res: IRes) {
  const { funcion } = req.body;
  await FuncionService.addOne(funcion);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one película.
 */
async function update(req: IReq<{ funcion: IFuncion }>, res: IRes) {
  const { funcion } = req.body;
  await FuncionService.updateOne(funcion);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one película.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await FuncionService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
