import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    hello(): string {
      return 'Hello World!';
    },
    helloWithName(_: void, { name }) {
      return `Hello ${name}!`;
    },
    helloGraphql() {
      return 'Hello from GraphQL';
    },
  },
};

export default query;
