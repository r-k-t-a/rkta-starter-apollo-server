import merge from 'lodash/merge';
import { Country } from './Country/resolvers';
import { SignIn } from './SignIn/resolvers';

export const viewResolvers = merge({}, Country, SignIn);
