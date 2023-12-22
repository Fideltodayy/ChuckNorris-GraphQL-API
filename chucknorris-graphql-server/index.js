// index.js
// Import the ApolloServer and gql from apollo-server using the import syntax
import { ApolloServer, gql } from 'apollo-server';

// IMport the start alone server
 


// Import axios to make the HTTP requests
import axios from 'axios';
// Define the url to be used wehich is the ChuckNorris.io API URL
const url = 'https://api.chucknorris.io/jokes';

// Define the GraphQL schema/Graph

const typeDefs = `#graphql
  type Query {
    categories: [String]
    randomJoke(category: String): Joke
  }

  type Joke {
    icon_url: String!
    id: String!
    url: String!
    value: String!
  }
`;  

// Define the resolvers for the GraphQL schema/Graph to handle the Queries

const resolvers = {
    Query: {
        categories: async () => {
        
            try{
                const response = await axios.get(`${url}/categories`);
                return response.data;
            } catch (error) {
                console.error('Error fetching categories:', error.message);
                throw error;
            }
        },
        randomJoke: async (parent, args) => {
            try {
                const response = await axios.get(`${url}/random?category=${args.category}`);
                return response.data;
            } catch (error) {
                console.error(`Error fetching random joke for category ${category}:`, error.message);
                throw error;
            }
        },
    },
};

// Create the ApolloServer instance passing the schema and resolvers

const server = new ApolloServer({typeDefs, resolvers});

// Start the server

server.listen().then(({url}) => {
    console.log(`Server ready and running at ${url}`);
});