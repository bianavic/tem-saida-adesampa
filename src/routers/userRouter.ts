import { userService } from '../services/index';
import { createUser } from '../schemas/userSchema'
import { errors } from '../utils/body';

async function userRouter(fastify, options) {
  fastify.post('/user', {schema: createUser } , async (request, reply) => {
    try {

      const payload = request.body

      const response = await userService.create(payload);
      
      reply.status(200).send(response);
    } catch (error) {
      return errors(error);
    }
  });
}
export { userRouter };