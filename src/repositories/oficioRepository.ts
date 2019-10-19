import { oficio } from '../models/oficio';

const find = () => oficio.find();

const create = () => oficio.create();

export {
  find,
  create,
};
