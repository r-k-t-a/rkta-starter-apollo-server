import fs from 'fs';
import path from 'path';
import { importSchemaDo } from '../src/schema/typeDefs';

const targetDir = path.join(__dirname, '../build');
const targetPath = path.join(targetDir, 'schema.graphql');

export const collectSchema = (): string => {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);

  const nextTypeDefs = importSchemaDo();

  fs.writeFileSync(targetPath, nextTypeDefs);

  return nextTypeDefs;
};

if (require.main === module) collectSchema();
