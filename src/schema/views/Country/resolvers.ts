import { Country as CountryType } from '@';

export const Country = {
  Query: {
    countries: (): [CountryType] => {
      return [{ name: 'Moscow' }];
    },
  },
};
