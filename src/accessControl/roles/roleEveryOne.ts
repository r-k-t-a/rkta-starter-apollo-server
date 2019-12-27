import { rule } from 'graphql-shield';

export const roleEveryOne = rule({ cache: 'contextual' })(() => true);
