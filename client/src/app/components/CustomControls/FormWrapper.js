import React from 'react';
import CustomBackDrop from './CustomBackDrop';

const FormWrapper = props => {
  const { children } = props;

  return (
    <>
      {children}
      <CustomBackDrop />
    </>
  );
};

export default FormWrapper;
