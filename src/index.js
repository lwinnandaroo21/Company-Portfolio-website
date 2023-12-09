import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphql", graphQLErrors);
    graphQLErrors.forEach(({ extensions }) => {
      if (
        extensions.code === "invalid-headers" ||
        extensions.code === "invalid-jwt"
      ) {
        window.location.assign(`${window.location.origin}/login`);
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    alert("network connection problem");
  }
});

const httpLink = new HttpLink({
  uri: "https://portfolio.axra.app/v1/graphql",
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink)
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>
);


