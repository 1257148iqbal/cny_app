import { MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = props => {
  const { data, label, name, value, error, onChange } = props;
  return (
    <TextField
      select
      fullWidth
      variant="outlined"
      size="small"
      margin="dense"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}>
      <MenuItem value="">None</MenuItem>
      {data.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  name: 'Dropdown'
};

export default Dropdown;
