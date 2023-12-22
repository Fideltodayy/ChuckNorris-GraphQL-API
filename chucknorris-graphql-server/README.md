# Chuck Norris GraphQL Server

This server wraps the ChuckNorris.io API with a GraphQL interface, providing queries to fetch Chuck Norris jokes by categories.

## Folder Structure

- **`src/schema/`**: Contains the GraphQL schema definition.
- **`src/resolvers/`**: Includes the resolver functions for the GraphQL queries.
- **`src/server.js`**: Entrypoint for the GraphQL server.

## Setup Instructions

1. **Clone the Repository:**
git clone <https://github.com/Fideltodayy/ChuckNorris-GraphQL-API/tree/main>

2. **Navigate to the Server Folder:**

```
cd chucknorris-graphql-server
```

3. **Install Dependencies:**

```
npm install
```
4. **Run the Server:**

```
node index.js
```
This will start the Apollo Server at http://localhost:4000. The server will provide a GraphQL Playground for testing queries.

## GraphQL Queries
### Fetch All Categories

```
query {
  categories
}
```
### Fetch a Random Joke by Category
```
query GetRandomJoke($category: String){
  randomJoke ( category: $category){
    icon_url,
    id,
    value,
    __typename
  }
}
```
Replace "dev" with the desired category.

### Notes
Ensure that Node.js and npm are installed on your machine.
