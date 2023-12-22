// src/App.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES, GetCategoriesData } from './graphql/queries';
import CategoryButton from './components/CategoryButton';
import { useChuckNorrisContext } from './context/ChuckNorrisContext';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetCategoriesData>(GET_CATEGORIES);
  const { state } = useChuckNorrisContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <div>
        <h2>Categories</h2>
        <ul>
          {data?.categories?.map((category: string) => (
            <li key={category}>
              <CategoryButton category={category} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Random Joke</h2>
        {state.currentJoke ? (
          <p>{state.currentJoke.value}</p>
        ) : (
          <p>Select a category to see a random joke</p>
        )}
      </div>
    </div>
  );
};

export default App;
