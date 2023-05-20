import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const CustomPreloder = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default CustomPreloder;
