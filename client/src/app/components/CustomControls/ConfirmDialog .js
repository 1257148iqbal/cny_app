import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import React from 'react';
import { CancelButton } from '.';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  btnContinue: {
    color: '#0088DD',
    backgroundColor: '#FFFFFF',
    border: 'none',
    margin: 5,
    '&:hover': {
      backgroundColor: '#0088DD',
      color: '#FFFFFF',
      border: 'none'
    }
  }
}));

// onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}

const ConfirmDialog = props => {
  const classes = useStyles();
  const { confirmDialog, setConfirmDialog } = props;

  const handleCloseDialog = (event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return false;
    } else {
      setConfirmDialog({ ...confirmDialog, isOpen: false });
    }
  };
  return (
    <Dialog open={confirmDialog.isOpen} onClose={handleCloseDialog}>
      <DialogTitle id="confirm-dialog">{confirmDialog.title}</DialogTitle>
      <Divider />
      <DialogContent>{confirmDialog.content}</DialogContent>
      <DialogActions>
        <CancelButton onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}></CancelButton>
        <Button
          variant="contained"
          className={classes.btnContinue}
          endIcon={<DoneOutlineIcon />}
          onClick={confirmDialog.onConfirm}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// ConfirmDialog.propTypes = {
//   confirmButtonText: PropTypes.string.isRequired,
//   cancelButtonText: PropTypes.string.isRequired
// };
export default ConfirmDialog;
