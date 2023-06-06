/*
  > Title: Switch control
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2023-04-10
*/

import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(2)
  },
  switchBase: {
    padding: 1,
    color: 'red',
    '&$checked': {
      transform: 'translateX(16px)',
      color: '#04AA6D',
      '& + $track': {
        backgroundColor: '#fff',
        opacity: 1,
        border: `1px solid ${theme.palette.grey[400]}`
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const CustomizedSwitches = props => {
  const { name, label, checked, disabled, onChange } = props;

  return (
    <FormControlLabel
      style={{ marginLeft: 0, marginRight: 0 }}
      control={<IOSSwitch disabled={disabled} name={name} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

CustomizedSwitches.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

CustomizedSwitches.defaultProps = {
  disabled: false
};

export default CustomizedSwitches;

/**
 * 20-Jan-2022: Switch color change, true: #04AA6D, false:red
 **/
