
import { oficioService } from '../services/index';
import { errors } from '../utils/body';

async function oficioRouter(fastify, options) {
  fastify.get('/oficio', options, async (request, reply) => {
    try {
     
      const response = await oficioService.find();
      reply.status(200).send(response);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
  fastify.post('/oficio', options, async (request, reply) => {
    try {
      const response = await oficioService.create();
      reply.status(200).send(request.body);
    } catch (error) {
      return errors(error);
    }
  });
}
export { oficioRouter };
