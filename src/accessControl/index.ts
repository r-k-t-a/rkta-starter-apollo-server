import { shield } from 'graphql-shield';

import { roleEveryOne } from './roles';

export const accessControl = shield({
  Query: {
    '*': roleEveryOne,
  },
});
