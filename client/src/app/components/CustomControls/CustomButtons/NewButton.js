
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#24ADF3',
    border: 'none',
    '&:hover': {
      backgroundColor: '#1F4F7C',
      border: 'none'
    }
  }
}));

const NewButton = props => {
  const classes = useStyles();
  const { onClick, appeared } = props;
  return (
    <>
      {appeared && (
        <Button className={classes.root} variant="contained" color="primary" endIcon={<Add />} onClick={onClick}>
          New
        </Button>
      )}
    </>
  );
};

NewButton.propTypes = {
  appeared: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

NewButton.defaultProps = {
  appeared: false
};

export default NewButton;
