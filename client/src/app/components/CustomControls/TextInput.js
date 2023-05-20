import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const TextInput = props => {
  const { label, placeholder, name, value, disabled, className, error, multiline, onChange, ...rest } = props;
  return (
    <TextField
      variant="outlined"
      size="small"
      margin="dense"
      fullWidth
      disabled={disabled}
      multiline={multiline}
      className={className}
      placeholder={placeholder}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={e => e.target.select()}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  name: '',
  value: '',
  error: '',
  disabled: false,
  multiline: false,
  // eslint-disable-next-line no-console
  onChange: () => console.warn(`Not passed 'onChange' event`)
};

export default TextInput;
