import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ComponentProvider } from './components/ComponentProvider';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // gql,
} from "@apollo/client";

// export const dataFromServer = (string) => gql`${string}`;

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
