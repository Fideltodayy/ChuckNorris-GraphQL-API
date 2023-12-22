import React, { createContext, useReducer, useContext } from 'react';

// Step 1: Create a context
const ChuckNorrisContext = createContext();

// Step 2: Create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_JOKE':
      return { ...state, currentJoke: action.payload };
    default:
      return state;
  }
};

// Step 3: Create a provider component
export const ChuckNorrisProvider = ({ children }) => {
  const initialState = {
    selectedCategory: null,
    currentJoke: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChuckNorrisContext.Provider value={{ state, dispatch }}>
      {children}
    </ChuckNorrisContext.Provider>
  );
};

// Step 4: Create a custom hook for using the context
export const useChuckNorrisContext = () => {
  const context = useContext(ChuckNorrisContext);
  if (!context) {
    throw new Error('useChuckNorrisContext must be used within a ChuckNorrisProvider');
  }
  return context;
};
