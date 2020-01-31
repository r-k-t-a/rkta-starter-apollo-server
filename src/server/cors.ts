const corsOriginsRaw = process.env.GRAPHQL_CORS_ORIGINS || '';
const corsOrigins = corsOriginsRaw.split(',');

export const cors: object = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
  maxAge: 2592000, // 30 days
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: corsOrigins.length > 1 ? corsOrigins : corsOrigins[0],
};
