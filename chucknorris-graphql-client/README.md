# Chuck Norris GraphQL Client

This Single Page App (SPA) consumes the Chuck Norris GraphQL API and displays Chuck Norris jokes based on selected categories.

## Folder Structure

- **`src/components/`**: Contains React components, e.g., `CategoryButton.tsx`.
- **`src/graphql/`**: Includes GraphQL-related files, e.g., `queries.ts`.
- **`src/App.tsx`**: Main entry point for the React app.

## Setup Instructions

1. **Clone the Repository:**
```
git clone <https://github.com/Fideltodayy/ChuckNorris-GraphQL-API/tree/main>
```

2. **Navigate to the Server Folder:**

```
cd chucknorris-graphql-client
```

3. **Install Dependencies:**

```
npm install
```
4. **Run the Client:**

```
npm start
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
