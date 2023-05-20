import { IconButton, Tooltip } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  btnChild: {
    color: '#919191'
  },
  btnParent: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
      '& $btnChild': {
        color: '#919191'
      }
    }
  }
}));

const CloseIcon = props => {
  const classes = useStyles({});
  const { onClick } = props;
  return (
    <Tooltip title="Filter list" placement="left">
      <IconButton className={classes.btnParent} onClick={onClick}>
        <FilterList className={classes.btnChild} />
      </IconButton>
    </Tooltip>
  );
};

CloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

CloseIcon.defaultProps = {
  onClick: () => {
    // eslint-disable-next-line no-console
    console.error(`'onClick' event not passed!!`);
  }
};

export default CloseIcon;
