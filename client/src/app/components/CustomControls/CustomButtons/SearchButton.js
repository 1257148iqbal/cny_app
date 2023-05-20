import Button from '@mui/material/Button';
import { Search } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  actionButton: {
    margin: 5,
    [theme.breakpoints.up('xs')]: {
      marginRight: 0
    }
  }
}));

const SearchButton = props => {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      endIcon={<Search />}
      className={classes.actionButton}
      onClick={onClick}>
      Search
    </Button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchButton;
