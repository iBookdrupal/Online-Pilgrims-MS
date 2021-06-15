import React from "react";
import App from "./App";
// import { ApolloClient } from "@apollo/client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from "@apollo/react-hooks";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
