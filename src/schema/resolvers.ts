import merge from 'lodash/merge';
import { viewResolvers } from './views/resolvers';

export const resolvers = merge({}, viewResolvers);
