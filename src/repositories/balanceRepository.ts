import { balance } from '../models/balance';

const find = () => balance.find();

const create = () => balance.create();

export {
  find,
  create,
};
