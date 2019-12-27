import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { Context, Config } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';

import { accessControl } from './accessControl';
import { typeDefs, resolvers } from './schema';

const isProduction = process.env.NODE_ENV === 'production';

export function getApolloServerOptions(): Config {
  const schemaWithoutACL = makeExecutableSchema({ typeDefs, resolvers });
  const schema = applyMiddleware(schemaWithoutACL, accessControl);

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: (context: any): Context => ({
      koaContext: context.ctx,
    }),
    schema,
    playground: !isProduction && {
      settings: {
        'request.credentials': 'include',
        'editor.reuseHeaders': true,
      },
    },
    formatError: (error: GraphQLError): GraphQLFormattedError => ({
      ...error,
      extensions: {},
    }),
  };
}
