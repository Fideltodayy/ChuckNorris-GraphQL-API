import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChuckNorrisProvider } from "./context/ChuckNorrisContext";
const client = new ApolloClient({
  uri: "https://fidel-chucknorris-jokes.onrender.com",
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
