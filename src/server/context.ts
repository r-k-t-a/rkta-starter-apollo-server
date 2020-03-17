import { Context as ApolloContext } from 'apollo-server-core';

import { isValidLocale } from '../util';

interface LocalContext extends ApolloContext {
  country: string;
  language: string;
  locale: string;
}

interface Request {
  req: {
    headers: {
      'accept-language'?: string;
    };
  };
}

const LANGUAGES = process.env.LANGUAGES?.split(',') || [];
const DEFAULT_COUNTRY = process.env.DEFAULT_COUNTRY || 'US';
const DEFAULT_LANGUAGE = LANGUAGES[0];
const defaultLocale = `${DEFAULT_LANGUAGE}-${DEFAULT_COUNTRY}`;

export const context = async ({ req }: Request): Promise<LocalContext> => {
  const tag = req.headers['accept-language']?.split(',').shift() || defaultLocale;
  const locale = isValidLocale(tag) ? tag : defaultLocale;
  const [clientLanguage, country] = locale.split('-');
  const language = LANGUAGES.includes(clientLanguage) ? clientLanguage : DEFAULT_LANGUAGE;
  return {
    country,
    language,
    locale,
  };
};
