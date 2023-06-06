import { useContext, createContext } from 'react';

export const useBackDrop = () => {
  return useContext(createContext());
};
