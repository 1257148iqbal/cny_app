import PropTypes from 'prop-types';
import React from 'react';

const Form = props => {
  const { onSubmit, children, className, ...rest } = props;

  return (
    <form autoComplete="off" onSubmit={onSubmit} className={className} {...rest}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string
};

export default Form;
