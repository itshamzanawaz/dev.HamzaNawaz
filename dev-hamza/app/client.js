import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/clunqay5g131507wgjqufzvtb/master',
  cache: new InMemoryCache(),
});

export default client;