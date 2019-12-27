/* eslint-disable import/newline-after-import,import/first */
import dotenv from 'dotenv';
const { error } = dotenv.config();
if (error) throw error;

import debugModule from 'debug';
import Koa from 'koa';

const debug = debugModule('*');

import { mountApolloServer } from './mountApolloServer';
import { useCORS } from './useCORS';

const { KOA_PORT } = process.env;

const app = new Koa();

Promise.resolve(app)
  .then(useCORS)
  .then(mountApolloServer)
  .then(() => {
    app.listen(KOA_PORT, () => {
      debug(`Listenting on port: ${KOA_PORT}`);
    });
  });
