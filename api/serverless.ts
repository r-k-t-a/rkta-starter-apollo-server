import { ApolloServer } from 'apollo-server-lambda';
import { getApolloServerOptions } from '../src/getApolloServerOptions';
import { cors } from '../src/cors';

const options = getApolloServerOptions();
const server = new ApolloServer(options);

module.exports.handler = server.createHandler({ cors });
