import merge from 'lodash/merge';

import { BooksResolvers } from './Books/resolvers';

export const resolvers = merge({}, BooksResolvers);
