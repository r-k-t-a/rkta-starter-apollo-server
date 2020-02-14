import { ApolloServer } from 'apollo-server-lambda';
import { config } from '../src/server/config';
import { cors } from '../src/server/cors';

const server = new ApolloServer(config);

module.exports.handler = server.createHandler({ cors });
