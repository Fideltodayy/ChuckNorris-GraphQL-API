import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChuckNorrisProvider } from "./context/ChuckNorrisContext";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ChuckNorrisProvider>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </ChuckNorrisProvider>,
  document.getElementById("root")
);
reportWebVitals();
