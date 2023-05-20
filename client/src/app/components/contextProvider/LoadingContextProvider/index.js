import React from 'react';
import LoadingContext from './LoadingContext';

const LoadingContextProvider = ({ children }) => {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <LoadingContext.Provider value={{ openBackdrop, setOpenBackdrop, loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
