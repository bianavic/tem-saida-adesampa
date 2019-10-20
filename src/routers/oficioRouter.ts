import { oficioService } from '../services/index';
import { createOficio } from '../schemas/oficioSchema'
import { errors } from '../utils/body';

async function oficioRouter(fastify, options) {
  fastify.get('/oficio/:id', options, async (request, reply) => {
    try {
      const payload = request.params.id
      const response = await oficioService.findById(payload);
      reply.status(200).send(response);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
  fastify.post('/oficio', {schema: createOficio} , async (request, reply) => {
    try {

      const payload = request.body
      const response = await oficioService.create(payload);
      
      reply.status(200).send(response);
    } catch (error) {
      return errors(error);
    }
  });
}
export { oficioRouter };