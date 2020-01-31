import { ApolloServer } from 'apollo-server-lambda';
import { config } from '../src/config';
import { cors } from '../src/cors';

const server = new ApolloServer(config);

module.exports.handler = server.createHandler({ cors });
