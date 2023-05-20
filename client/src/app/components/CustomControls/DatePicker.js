import { DatePicker } from '@mui/lab';
import PropTypes from 'prop-types';
import React from 'react';

const CustomDatePicker = props => {
  const {
    label,
    value,
    disablePast,
    disableFuture,
    onChange,
    minDate,
    maxDate,
    disabled,
    clearable,
    animateYearScrolling,
    format,
    error,
    ...rest
  } = props;
  return (
    <DatePicker
      disabled={disabled}
      minDate={minDate}
      maxDate={maxDate}
      autoOk
      clearable={clearable || false}
      animateYearScrolling={animateYearScrolling}
      fullWidth
      disablePast={disablePast}
      disableFuture={disableFuture}
      inputVariant="outlined"
      size="small"
      color="primary"
      margin="dense"
      format={format || 'DD-MMM-yyyy'}
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  onChange: PropTypes.func
};

CustomDatePicker.defaultProps = {
  disablePast: false,
  disableFuture: false
};

export default CustomDatePicker;
