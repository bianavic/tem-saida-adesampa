import fastify from 'fastify';
import swagger from 'fastify-swagger';
import cors from 'fastify-cors';
import * as routes from './routers/index';
import startMongo from './infrastructure/mongoDB/client';
import * as dotenv from 'dotenv'

dotenv.config()

const server = fastify({});

server.register(cors);

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

Object.values(routes).forEach(server.register);

const start = async () => {
  try {
     await startMongo();
    await server.listen(3000, '0.0.0.0');
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
