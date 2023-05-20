import { Grid, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CloseIcon from './IconButtons/CloseIcon';

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: 100
    // paddingTop: 50
  }
}));

const CustomModal = props => {
  const classes = useStyles();
  const { modalOpen, setModalOpen, children } = props;
  const toggleModal = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setModalOpen(open);
  };
  return (
    <Modal anchor="right" open={modalOpen}>
      <div className={classes.formContainer}>
        <Grid container justify="flex-end" style={{ color: 'white' }}>
          <CloseIcon onClick={toggleModal(false)} />
        </Grid>
        <Grid>{children}</Grid>
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

CustomModal.defaultProps = {
  modalOpen: false,
  children: <p>Not passed any element</p>
};

export default CustomModal;
