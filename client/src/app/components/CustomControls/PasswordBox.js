import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';

export default function PassordBox(props) {
  const { showPassword, setShowPassword, label, name, value, onChange, error = null, ...others } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        margin="dense"
        size="small"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        {...others}
        {...(error && { error: true, helperText: error })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
}

PassordBox.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
