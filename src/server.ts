import fastify from 'fastify';
import swagger from 'fastify-swagger';
import cors from 'fastify-cors';
import * as routes from './routers/index';
import startMongo from './infrastructure/mongoDB/client';
import jwt from 'fastify-jwt'
import * as dotenv from 'dotenv'

dotenv.config()

const server = fastify({});

server.register(cors);

server.decorate('authenticate', async function (request, reply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
})

server.register(jwt, {
  secret: 'QX2PXgnE9jhhc6GtGhzjuuznHt67L9DL'
})

server.register(swagger, {
  exposeRoute: true,
  routePrefix: '/swagger',
  swagger: {
    info: {
      title: 'Mock',
      version: '0.1.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Mock-Api', description: 'Mock-Api documentation.' }],
  },
});

for (const i in routes) {
  server.register(routes[i])
}

const start = async () => {
  try {
    await startMongo();
    await server.listen(process.env.PORT || 3000, '0.0.0.0');
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});
process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
