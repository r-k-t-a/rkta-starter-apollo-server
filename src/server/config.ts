import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { Config } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';

import { accessControl } from '../accessControl';
import { typeDefs, resolvers } from '../schema';
import { context } from './context';

const isProduction = process.env.NODE_ENV === 'production';

const schemaWithoutACL = makeExecutableSchema({ typeDefs, resolvers });
const schema = applyMiddleware(schemaWithoutACL, accessControl);

export const config: Config = {
  context,
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
