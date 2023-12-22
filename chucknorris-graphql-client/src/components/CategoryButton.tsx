// src/components/CategoryButton.tsx
import React from 'react';
import { useChuckNorrisContext } from '../context/ChuckNorrisContext';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE, GetRandomJokeData } from '../graphql/queries';

interface CategoryButtonProps {
  category: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  const { dispatch } = useChuckNorrisContext();
  const { data } = useQuery<GetRandomJokeData>(GET_RANDOM_JOKE, {
    variables: { category },
  });

  const handleClick = () => {
    // Dispatch action to set the selected category in the context
    dispatch({ type: 'SET_CATEGORY', payload: category });
    // Dispatch action to set the current joke in the context
    dispatch({ type: 'SET_JOKE', payload: data?.randomJoke });
  };

  return (
    <button onClick={handleClick}>{category}</button>
  );
};

export default CategoryButton;
