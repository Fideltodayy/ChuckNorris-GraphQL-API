// index.js
// Import the ApolloServer and gql from apollo-server using the import syntax
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './schema/index.js';
import { resolvers } from './resolvers/index.js';
 

// Create the ApolloServer instance passing the schema and resolvers
const server = new ApolloServer({typeDefs, resolvers});

// Start the server
server.listen().then(({url}) => {
    console.log(`Server ready and running at ${url}`);
});