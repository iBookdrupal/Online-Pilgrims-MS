import React from "react";
import App from "./App";
// import { ApolloClient } from "@apollo/client";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: authLink.concat("http://localhost:5000"),
//   cache: new InMemoryCache(),
// });

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
