// Define the GraphQL schema/Graph

export const typeDefs = `#graphql
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
