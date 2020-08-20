import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const gqlClient = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache()
});

