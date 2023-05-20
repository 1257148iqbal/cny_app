
import LoadingContext from 'app/components/contextProvider/LoadingContextProvider/LoadingContext';
import { useContext } from 'react';

export const useBackDrop = () => {
  return useContext(LoadingContext);
};
