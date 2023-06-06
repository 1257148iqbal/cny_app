
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import clsx from 'clsx';
import React from 'react';
import { PageHeader } from '../index';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  pageFull: {
    width: '100%',
    height:'111px'
  }
}));

const PageContainer = ({ heading, breadcrumbs, children, className, restProps }) => {
  const classes = useStyles();

  return (
    <Slide in={true} direction="up" mountOnEnter unmountOnExit>
      <Box className={clsx(classes.pageFull, className)} {...restProps}>
        <PageHeader heading={heading} />

        {children}
      </Box>
    </Slide>
  );
};

export default PageContainer;
