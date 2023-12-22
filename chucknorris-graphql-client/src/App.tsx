// src/App.tsx
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES, GetCategoriesData } from './graphql';
import CategoryButton from './components/CategoryButton';
const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetCategoriesData>(GET_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              <CategoryButton
                category={category}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
