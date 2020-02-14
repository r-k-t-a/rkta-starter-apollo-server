const corsOriginsRaw = process.env.GRAPHQL_CORS_ORIGINS || '';
const corsOrigins = corsOriginsRaw.split(',');

interface CorsOptions {
  allowedHeaders: string[];
  credentials: boolean;
  maxAge: number;
  methods: string[];
  origin: string | string[];
}

// https://github.com/expressjs/cors#configuration-options
export const cors: CorsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
  maxAge: 2592000, // 30 days
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: corsOrigins.length > 1 ? corsOrigins : corsOrigins[0],
};
