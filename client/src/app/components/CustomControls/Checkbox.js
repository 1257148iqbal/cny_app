/* eslint-disable no-console */
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = props => {
  const { name, label, checked, disabled, onChange, ...rest } = props;
  return (
    <>
      <FormControlLabel
        control={<MuiCheckbox color="primary" disabled={disabled} checked={checked} onChange={onChange} name={name} />}
        label={label}
        {...rest}
      />
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  disabled: false,
  label: ''
};

export default Checkbox;
