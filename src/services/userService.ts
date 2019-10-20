import { userRepository } from '../repositories/index';

const findOne = (query) => userRepository.findOne(query);

const create = (query) => userRepository.create(query);

export { findOne, create };
