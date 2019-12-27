import path from 'path';
import { importSchema } from 'graphql-import';

const typeDefsPath = path.join(__dirname, './index.graphql');

export const typeDefs = importSchema(typeDefsPath);
