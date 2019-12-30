/* eslint-disable import/newline-after-import,import/first */
import dotenv from 'dotenv';
const { error } = dotenv.config();
if (error) throw error;

import debugModule from 'debug';
import { ApolloServer } from 'apollo-server';
import { getApolloServerOptions } from './getApolloServerOptions';
import { cors } from './cors';

const debug = debugModule('*');

const { PORT } = process.env;

const options = getApolloServerOptions();
const server = new ApolloServer({ ...options, cors });

server.listen(PORT).then(({ url }) => {
  debug(`Listenting at: ${url}`);
});
