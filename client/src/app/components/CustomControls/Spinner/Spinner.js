import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { usePromiseTracker } from 'react-promise-tracker';
import './spinner.css';

const Spinner = props => {
  const { type } = props;
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner">
        <Loader type={type} color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
};

Spinner.propTypes = {
  type: PropTypes.oneOf([
    'Audio',
    'BallTriangle',
    'Bars',
    'Circles',
    'CradleLoader',
    'Grid',
    'Hearts',
    'MutatingDots',
    'Oval',
    'Plane',
    'Puff',
    'RevolvingDot',
    'Rings',
    'TailSpin',
    'ThreeDots',
    'Triangle',
    'Watch'
  ])
};

Spinner.defaultProps = {
  type: 'ThreeDots'
};

export default Spinner;
