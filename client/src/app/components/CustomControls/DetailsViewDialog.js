import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import React from 'react'; 
import CloseIcon from './IconButtons/CloseIcon';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(4)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2)
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <span className={classes.closeButton}>
          <CloseIcon onClick={onClose} />
        </span>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  }
}))(MuiDialogActions);

const CustomizedDialogs = ({ open, setOpen, title, children, ...rest }) => {
  const handleClose = (event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return false;
    } else {
      setOpen(false);
    }
  };

  return (
    <Box>
      <Dialog maxWidth="xl" onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomizedDialogs;
