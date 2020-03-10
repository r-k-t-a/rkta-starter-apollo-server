/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';

import { collectSchema } from './collect-schema';

const outputFile = path.join(__dirname, '../src/@types/graphql-generated-types.d.ts');

export const generateTypes = (schema: string): void => {
  generateTypeScriptTypes(schema, outputFile, {
    asyncResult: true,
    smartTResult: true,
    smartTParent: true,
    typePrefix: '',
  });
};

if (require.main === module) {
  const schema = collectSchema();
  generateTypes(schema);
}
