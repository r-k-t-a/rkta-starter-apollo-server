/* eslint-disable import/newline-after-import,import/first */
import dotenv from 'dotenv';
const { error } = dotenv.config();
if (error) throw error;

import debugModule from 'debug';
import { ApolloServer } from 'apollo-server';
import { config } from './config';
import { cors } from './cors';

const debug = debugModule('*');
const { GRAPHICL_PORT } = process.env;
const server = new ApolloServer({ ...config, cors });

server.listen(GRAPHICL_PORT).then(({ url }) => {
  debug(`Listenting at: ${url}`);
});
