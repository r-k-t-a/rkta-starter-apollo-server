import { ApolloServer } from 'apollo-server-lambda';
import { getApolloServerOptions } from '../src/getApolloServerOptions';

const corsOriginsRaw = process.env.GRAPHQL_CORS_ORIGINS || '';
const corsOrigins = corsOriginsRaw.split(',');

const options = getApolloServerOptions();
const server = new ApolloServer(options);

module.exports.handler = server.createHandler({
  cors: {
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
    maxAge: 2592000, // 30 days
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: corsOrigins.length > 1 ? corsOrigins : corsOrigins[0],
  },
});
