/* eslint-disable import/no-extraneous-dependencies */
import watch from 'node-watch';
import path from 'path';
import debounce from 'lodash/debounce';

import { collectSchema } from './collect-schema';
import { generateTypes } from './generate-graphql-types';

const watchDir = path.join(__dirname, '../src/schema');

const triggerGenerate = (): void => {
  const schema = collectSchema();
  generateTypes(schema);
};

const debouncedTrigger = debounce(triggerGenerate, 500);

const watchOptions = {
  recursive: true,
  filter: (filePath: string): boolean => /\.graphql/.test(filePath),
};

triggerGenerate();

watch(watchDir, watchOptions, debouncedTrigger);
