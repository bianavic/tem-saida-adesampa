import { candidata } from '../models/candidata';

const findById = (query) => candidata.findById(query);

const create = (query) => candidata.create(query);

export {
  findById,
  create,
};