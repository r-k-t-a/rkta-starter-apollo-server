// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SignIn {}

export const SignIn = {
  Query: {
    signedIn: (): SignIn | null => {
      return null;
    },
  },
};
