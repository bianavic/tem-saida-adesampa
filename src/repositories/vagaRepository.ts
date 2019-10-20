import { vaga } from '../models/vaga';

const findById = (query) => vaga.findById(query);

const create = (query) => vaga.create(query);

export {
  findById,
  create,
};