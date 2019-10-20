
import { vagaService } from '../services/index';
import { errors } from '../utils/body';

async function vagaRouter(fastify, options) {
  fastify.get('/vagas/:id', options, async (request, reply) => {
    try {
      const payload = request.params.id
      const response = await vagaService.findById(payload);
      reply.status(200).send(response);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
  fastify.post('/vagas', options, async (request, reply) => {
    try {

      const payload = request.body
   
      const response = await vagaService.create(payload);
      reply.status(200).send(response);
    } catch (error) {
      return errors(error);
    }
  });
}
export { vagaRouter };
