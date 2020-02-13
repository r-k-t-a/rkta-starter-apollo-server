import { books } from '../../mocks';

export const BooksResolvers = {
  Query: {
    books: (): { author: string; title: string }[] => books,
  },
};
