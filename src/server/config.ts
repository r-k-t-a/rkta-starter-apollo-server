import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { Config, Context } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';

import { accessControl } from '../accessControl';
import { typeDefs, resolvers } from '../schema';

const isProduction = process.env.NODE_ENV === 'production';

const schemaWithoutACL = makeExecutableSchema({ typeDefs, resolvers });
const schema = applyMiddleware(schemaWithoutACL, accessControl);

export const config: Config = {
  context: (): Context => ({}),
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
