import Button from '@mui/material/Button';
import { RotateLeft } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  actionButton: {
    margin: 5,
    border: 'none',
    [theme.breakpoints.up('xs')]: {
      marginRight: 0
    },
    '&:hover': {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      border: 'none'
    }
  }
}));

const ResetButton = props => {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      color="default"
      size="small"
      endIcon={<RotateLeft />}
      className={classes.actionButton}
      onClick={onClick}>
      Reset
    </Button>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ResetButton;
