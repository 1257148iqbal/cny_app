import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF'
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    marginBottom: 5
  }
}));

const CustomTab = withStyles({
  root: {
    backgroundColor: '#FFFFFF',
    color: '#000000'
  },
  selected: {
    backgroundColor: '#215280',
    color: '#FFFFFF'
  }
})(Tab);

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const TabControl = props => {
  const { components } = props;

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              height: 5,
              background: '#FFFF00'
            }
          }}>
          {components.map(item => (
            <CustomTab key={item.index + 1} value={item.index} label={item.heading} />
          ))}
        </Tabs>
      </AppBar>
      {components.map(item => (
        <TabPanel key={item.index + 1} value={value} index={item.index}>
          {item.component}
        </TabPanel>
      ))}
    </Box>
  );
};

TabControl.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      heading: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    }).isRequired
  )
};

export default TabControl;
