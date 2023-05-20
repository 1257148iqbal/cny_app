import { Drawer, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CloseIcon from './IconButtons/CloseIcon';

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: 15
  }
}));

const CustomDrawer = props => {
  const classes = useStyles();
  const { customDrawerOpen, setCustomDrawerOpen, children } = props;
  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setCustomDrawerOpen(open);
  };
  return (
    <Drawer anchor="top" open={customDrawerOpen}>
      <div className={classes.formContainer}>
        <Grid container justifyContent="flex-end">
          <CloseIcon onClick={toggleDrawer(false)} />
        </Grid>
        {children}
      </div>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  customDrawerOpen: PropTypes.bool.isRequired,
  setCustomDrawerOpen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default CustomDrawer;
