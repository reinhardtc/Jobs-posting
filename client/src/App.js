import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  // call istokenexpired in a if statement
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
      </Router>
    </ApolloProvider>
  );
}

export default App;
