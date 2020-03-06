/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';

const outputFile = path.join(__dirname, '../src/@types/graphql-generated-types.d.ts');

export const generateTypes = (schema: string): void => {
  generateTypeScriptTypes(schema, outputFile, {
    asyncResult: true,
    smartTResult: true,
    smartTParent: true,
    typePrefix: '',
  });
};
