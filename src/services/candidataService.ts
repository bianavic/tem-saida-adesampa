import { candidataRepository } from '../repositories/index';

const findById = (query) => candidataRepository.findById(query);

const create = (query) => candidataRepository.create(query);

export { findById, create };