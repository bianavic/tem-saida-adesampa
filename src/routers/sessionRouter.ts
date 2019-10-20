
import { userService } from '../services/index';
import { errors } from '../utils/body';

async function sessionRouter(fastify, options) {
  fastify.get('/session/:id', options, async (request, reply) => {
    try {
      const { id } = request.params

      const { email, password } = request.body

      const user = userService.findOne({ where: { email } })

      if (!user) {
        return reply.status(401).send({ error: 'User not found.' });
    }

      reply.status(200).send(user);
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
}
export { sessionRouter };
