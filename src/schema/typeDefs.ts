import path from 'path';
import { importSchema } from 'graphql-import';

const typeDefsPath = path.join(__dirname, './index.graphql');

export const importSchemaDo = (): string => importSchema(typeDefsPath);

export const typeDefs = importSchemaDo();
