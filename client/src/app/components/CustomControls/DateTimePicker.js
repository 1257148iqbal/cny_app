import { DateTimePicker } from '@mui/lab';
import PropTypes from 'prop-types';
import React from 'react';

const CustomDateTimePicker = props => {
  const { label, value, onChange } = props;

  return (
    <DateTimePicker
      autoOk
      hideTabs
      fullWidth
      ampm={false}
      allowKeyboardControl={false}
      inputVariant="outlined"
      color="primary"
      size="small"
      margin="dense"
      format="DD-MMM-yyyy HH:mm"
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

CustomDateTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

export default CustomDateTimePicker;
