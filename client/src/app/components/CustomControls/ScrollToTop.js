/*
     Title: Scroll To Top
     Description: 
     Author: Nasir Ahmed
     Date: 08-November-2021
     Modified: 08-November-2021
*/

import { Button } from '@mui/material';
import { VerticalAlignTop } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { scrollToTop } from 'app/utils/commonHelper';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  });
  return (
    <div style={{ position: 'fixed', right: 30, bottom: 20 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        style={{ opacity: isVisible ? 1 : 0, transition: '0.5s all ease' }}>
        <VerticalAlignTop />
      </Button>
    </div>
  );
};

export default ScrollToTop;
