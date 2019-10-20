import { user } from '../models/user';

const findOne = (query) => user.findOne(query);

const create = (query) => user.create(query);

export {
  findOne,
  create,
};
