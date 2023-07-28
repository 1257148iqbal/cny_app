import '@custom-styles/production/custom-page-preloader.scss';
import React from 'react';

const CustomPagePreLoader = () => {
  return (
    <div className="container center">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default CustomPagePreLoader;
