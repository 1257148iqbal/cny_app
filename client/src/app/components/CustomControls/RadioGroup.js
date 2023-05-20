import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MUIRadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const RadioGroup = props => {
  const { groupName, row, name, value, onChange, items } = props;
  return (
    <FormControl margin="dense" component="fieldset">
      <FormLabel component="legend">{groupName}</FormLabel>
      <MUIRadioGroup row={row} name={name} value={value} onChange={onChange}>
        {items.map(item => (
          <FormControlLabel key={item.value} label={item.label} value={item.value} control={<Radio color="primary" />} />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};

RadioGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  row: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

RadioGroup.defaultProps = {
  row: true
};

export default RadioGroup;
