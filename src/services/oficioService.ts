import { oficioRepository } from '../repositories/index';

const find = () => oficioRepository.find();

const create = () => oficioRepository.create();

export { find, create };
