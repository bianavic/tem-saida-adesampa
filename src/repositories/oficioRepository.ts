import { oficio } from '../models/oficio';

const findById = (query) => oficio.findById(query);

const create = (query) => oficio.create(query);

export {
  findById,
  create,
};