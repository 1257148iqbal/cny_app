//** React Imports
// ** Configs
import themeConfig from '@configs/themeConfig';
import { useState } from 'react';


export const useNavbarColor = () => {
  // ** State
  const [navbarColor, setNavbarColor] = useState( () => {
    try {
      return themeConfig.layout.navbar.backgroundColor;
    } catch ( error ) {
      // ** If error return initialValue
      return themeConfig.layout.navbar.backgroundColor;
    }
  } );

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value( navbarColor ) : value;

      // ** Set state
      setNavbarColor( valueToStore );
    } catch ( error ) {
      // ** A more advanced implementation would handle the error case
    }
  };

  return [navbarColor, setValue];
};
