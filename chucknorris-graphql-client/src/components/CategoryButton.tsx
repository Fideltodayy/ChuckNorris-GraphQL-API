// src/CategoryButton.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE, GetRandomJokeData } from '../graphql';

interface CategoryButtonProps {
  category: string;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, selectedCategory, onSelectCategory }) => {
  const { loading, error, data } = useQuery<GetRandomJokeData>(GET_RANDOM_JOKE, {
    variables: { category: selectedCategory || category },
  });

  const handleCategoryClick = () => {
    onSelectCategory(category);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { icon_url, value } = data?.randomJoke || {};

  return (
    <div>
      <h3>{category}</h3>
      <button onClick={handleCategoryClick}>Get Joke</button>
      {selectedCategory === category && (
        <>
          <img src={icon_url} alt="Chuck Norris" />
          <p>{value}</p>
        </>
      )}
    </div>
  );
};

export default CategoryButton;
