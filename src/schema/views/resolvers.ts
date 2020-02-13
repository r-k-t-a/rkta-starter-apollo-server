import merge from 'lodash/merge';
import { SignIn } from './SignIn/resolvers';

export const viewResolvers = merge({}, SignIn);
