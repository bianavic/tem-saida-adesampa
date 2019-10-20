
import { candidataService } from '../services/index';
import { errors } from '../utils/body';

async function candidataRouter(fastify, options) {
  fastify.get('/candidata/:id', options, async (request, reply) => {
    try {
      const payload = request.params.id
      const response = await candidataService.findById(payload);
      reply.status(200).send(response);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
  fastify.post('/candidata', options, async (request, reply) => {
    try {

      const payload = request.body
   
      const response = await candidataService.create(payload);
      reply.status(200).send(response);
    } catch (error) {
      return errors(error);
    }
  });
}
export { candidataRouter };
