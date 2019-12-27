import fs from 'fs';
import path from 'path';
import { typeDefs } from '../src/schema';

const targetDir = path.join(__dirname, '../build');
const targetPath = path.join(targetDir, 'schema.graphql');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);

fs.writeFileSync(targetPath, typeDefs);
