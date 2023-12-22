// src/queries.ts
import { gql } from '@apollo/client';

interface GetCategoriesData {
  categories: string[];
}

interface GetRandomJokeData {
  randomJoke: {
    icon_url: string;
    id: string;
    value: string;
    __typename: string;
  };
}

export const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

export const GET_RANDOM_JOKE = gql`
  query GetRandomJoke($category: String!) {
    randomJoke(category: $category) {
      icon_url
      id
      value
      __typename
    }
  }
`;

export type { GetCategoriesData, GetRandomJokeData };
