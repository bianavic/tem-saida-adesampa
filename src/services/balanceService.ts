import { balanceRepository } from '../repositories/index';

const find = () => balanceRepository.find();

const create = () => balanceRepository.create();

export { find, create };
