/* eslint-disable no-console */
/**
 * Title: Custom Icons
 * Description: Custom Icons
 * Author: Nasir Ahmed
 * Date: 05-December-2021
 * Modified: 05-December-2021
 **/

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { PlusSquare, XSquare } from 'react-feather';
import { Button } from 'reactstrap';
import classes from './CustomIcons.module.css';

export const PlusIcon = props => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} className={classNames('btn-icon', classes.transition)} color="flat-success" id="positionBottom">
      <PlusSquare size={24} />
    </Button>
  );
};

export const CrossIcon = props => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} className="btn-icon " color="flat-danger">
      <XSquare size={24} />
    </Button>
  );
};

PlusIcon.propTypes = {
  onClick: PropTypes.func
};

PlusIcon.defaultProps = {
  onClick: () => {
    console.warn(`'onClick' event not set`);
  }
};

CrossIcon.propTypes = {
  onClick: PropTypes.func
};

CrossIcon.defaultProps = {
  onClick: () => {
    console.warn(`'onClick' event not set`);
  }
};
