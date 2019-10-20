import { vagaRepository } from '../repositories/index';

const findById = (query) => vagaRepository.findById(query);

const create = (query) => vagaRepository.create(query);

export { findById, create };
