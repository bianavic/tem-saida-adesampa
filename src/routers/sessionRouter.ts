import { userService } from '../services/index';
import Iuser from '../types/IUser'
import { errors } from '../utils/body';
import { Icontato } from '../types/IContato';

async function sessionRouter(fastify, options) {
  fastify.get('/session/:id', options, async (request, reply) => {
    try {
      const { id } = request.params

      const { email, password } = request.body

      const user = userService.findOne({ where: { email } })

      if (!user) {
        return reply.status(401).send({ error: 'User not found.' });
    }

     const token = fastify.jwt.sign({ id: user._id, email: user.email })

      reply.status(200).send({ token: token });
    } catch (error) {
      reply.status(error.status);
      return errors(error);
    }
  });
}
export { sessionRouter };