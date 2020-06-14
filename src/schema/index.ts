import 'graphql-import-node';

import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.gql';
import resolvers from '../resolvers/resolversMap';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
