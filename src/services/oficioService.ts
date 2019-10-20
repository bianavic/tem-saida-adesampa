import { oficioRepository } from '../repositories/index';

const findById = (query) => oficioRepository.findById(query);

const create = (query) => oficioRepository.create(query);

export { findById, create };