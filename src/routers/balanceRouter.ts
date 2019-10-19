
import { balanceService } from '../services/index';
import { errors } from '../utils/body';

async function balanceRouter(fastify, options) {
  fastify.get('/balances/:phoneNumber', options, async (request, reply) => {
    try {
      const response = await balanceService.find();
      reply.status(200).send(response);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
  fastify.post('/balances/:phoneNumber', options, async (request, reply) => {
    try {
      const response = await balanceService.create();
      reply.status(200).send(response);
    } catch (error) {
      return errors(error);
    }
  });
}
export { balanceRouter };
