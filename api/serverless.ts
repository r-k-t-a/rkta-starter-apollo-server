import { NowRequest, NowResponse } from '@now/node';

import { ApolloServer } from 'apollo-server-micro';
import { config } from '../src/server/config';
import { cors } from '../src/server/cors';

const server = new ApolloServer(config);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withCors = (handler: any) => (req: NowRequest, res: NowResponse, ...args: any[]): void => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (cors.credentials) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  const preFlight = req.method === 'OPTIONS';
  if (preFlight) {
    res.setHeader('Access-Control-Allow-Methods', cors.methods.join(','));
    res.setHeader('Access-Control-Allow-Headers', cors.allowedHeaders.join(','));
    res.setHeader('Access-Control-Max-Age', String(cors.maxAge));
    res.end();
    return;
  }

  handler(req, res, ...args);
};

module.exports = withCors(server.createHandler({ path: '/', disableHealthCheck: true }));
