// src/App.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES, GET_RANDOM_JOKE, GetCategoriesData, GetRandomJokeData } from './graphql';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetCategoriesData>(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(data);
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
    </div>
  );
};

const CategoryButton: React.FC<{ category: string }> = ({ category }) => {
  const { loading, error, data } = useQuery<GetRandomJokeData>(GET_RANDOM_JOKE, {
    variables: { category },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <button onClick={() => alert(data?.randomJoke)}>{category}</button>
  );
};

export default App;
