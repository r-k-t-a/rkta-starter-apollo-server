interface Payload {
  name: string;
}

export const Country = {
  Query: {
    countries: (): [Payload] => {
      return [{ name: 'Moscow' }];
    },
  },
};
