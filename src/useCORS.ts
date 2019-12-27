import Application from 'koa';
import cors from 'koa2-cors';

const { GRAPHQL_CORS_ORIGINS } = process.env;
const allowedOrigins = (GRAPHQL_CORS_ORIGINS || '').split(',');

export const useCORS = (koaApp: Application): Application => {
  koaApp.use(
    cors({
      origin: ctx => {
        const origin = ctx.get('Origin');
        if (allowedOrigins.includes(origin)) return origin;
        return false;
      },
      maxAge: 2592000, // 30 days
      credentials: true,
      allowHeaders: ['Authorization', 'Content-Type'],
      allowMethods: ['GET', 'POST', 'OPTIONS'],
    }),
  );
  return koaApp;
};
