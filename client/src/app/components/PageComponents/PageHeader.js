import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  pageHeaderRoot: {
    marginBottom: 20,
    display: 'block',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      flexDirection: 'row'
    }
  },
  titleRoot: {
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: 10,
    background: '#215280',
    opacity: 0.8,
    color: '#fff',
    textTransform: 'uppercase',

    [theme.breakpoints.down('xs')]: {
      marginBottom: 6
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  }
}));

const PageHeader = ({ heading, breadcrumbComponent, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.pageHeaderRoot, 'page-header')} mb={{ xs: 5, md: 6, lg: 8 }} {...rest}>
      <Typography component="div" variant="h1" id="title" className={clsx(classes.titleRoot, 'title')}>
        {heading}
      </Typography>
      {/* <Box ml={{ sm: 'auto' }}>{breadcrumbComponent}</Box> */}
      {children}
    </Box>
  );
};

export default PageHeader;
