import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { CancelButton } from '.';

const useStyles = makeStyles(theme => ({
  title: {
    color: '#fff',
    backgroundColor: '#2f64ba',
    border: 'none',
    fontSize: '1.3rem',
    fontWeight: 'Bold',
    margin: 1,
    textAlign: 'center'
  }
}));

const CustomDialog = props => {
  const classes = useStyles();
  const { customDialog, setCustomDialog, children } = props;

  return (
    <div>
      <Dialog open={customDialog.isOpen} onClose={() => setCustomDialog({ ...customDialog, isOpen: false })}>
        <Typography className={classes.title}>{customDialog.title}</Typography>
        <DialogContent>{customDialog.content}</DialogContent>
        {children}

        <DialogActions>
          <CancelButton onClick={() => setCustomDialog({ ...customDialog, isOpen: false })} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
