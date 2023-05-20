
import { TimePicker } from '@mui/lab';
import PropTypes from 'prop-types';
import React from 'react';

const CustomTimePicker = props => {
  const { label, value, onChange, disabled, format, views, error, ...rest } = props;
  return (
    <TimePicker
      disabled={disabled}
      autoOk
      clearable
      fullWidth
      ampm={false}
      inputVariant="outlined"
      openTo="hours"
      views={views}
      format={format}
      color="primary"
      size="small"
      margin="dense"
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
};

CustomTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  views: PropTypes.array,
  format: PropTypes.string,
  onChange: PropTypes.func
};

CustomTimePicker.defaultProps = {
  views: ['hours', 'minutes', 'seconds'],
  format: 'HH:mm:ss',
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func
};

export default CustomTimePicker;
