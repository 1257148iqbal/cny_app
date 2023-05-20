import { Fab } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  btnUnlockChild: {
    color: '#8DCD03'
  },
  btnUnlockParent: {
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#8DCD03',
      '& $btnUnlockChild': {
        color: '#FFFFFF'
      }
    }
  }
}));

const FabUnlock = props => {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Fab size="small" className={classes.btnUnlockParent} onClick={onClick}>
      <LockOpen className={classes.btnUnlockChild} />
    </Fab>
  );
};

export default FabUnlock;
