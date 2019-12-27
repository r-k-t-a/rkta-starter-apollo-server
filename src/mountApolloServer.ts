import Application from 'koa';
import { ApolloServer } from 'apollo-server-koa';

import { getApolloServerOptions } from './getApolloServerOptions';

export function mountApolloServer(koaApp: Application): Application {
  const options = getApolloServerOptions();
  const server = new ApolloServer(options);
  server.applyMiddleware({ app: koaApp });
  return koaApp;
}
