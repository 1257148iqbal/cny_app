/*
     Title: Common Helper function
     Description: Common Helper function
     Author: Alamgir Kabir
     Date: 19-February-2022
     Modified: 27-March-2022
*/

import { useEffect, useState } from 'react';
import { ToWords } from 'to-words';
import { consoleType, single as ones, tens } from './enums';

export const mapArrayToDropdown = ( arr = [], label, value ) => {
  return arr.map( item => ( {
    ...item,
    label: item[label],
    value: item[value]
  } ) );
};

// declar a function for serial Number
export const mapSerialToDropdown = ( start, end ) => {
  const ddl = [];
  for ( let i = start; i <= end; i++ ) {
    ddl.push( { label: i, value: i } );
  }
  return ddl;
};

export const HexaColorCode = ( colorName, colorCode ) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span>{colorName}</span>
      <div style={{ width: 15, height: 15, backgroundColor: colorCode, borderRadius: 3 }}></div>
    </div>
  );
};

export const sleep = ms => new Promise( resolve => setTimeout( resolve, ms ) );

export const stringifyConsole = ( data, type ) => {
  if ( process.env.NODE_ENV === 'development' ) {
    if ( type === consoleType.normal ) {
      console.log( data );
    } else {
      console.log( JSON.stringify( data, null, 2 ) );
    }
  }
};

export const useDebounce = ( value, delay ) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState( '' );

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout( () => {
        setDebouncedValue( value );
      }, delay );

      // Return a cleanup function that will be called every time ...
      // ... useEffect is re-called. useEffect will only be re-called ...
      // ... if value changes (see the inputs array below).
      // This is how we prevent debouncedValue from changing if value is ...
      // ... changed within the delay period. Timeout gets cleared and restarted.
      // To put it in context, if the user is typing within our app's ...
      // ... search box, we don't want the debouncedValue to update until ...
      // ... they've stopped typing for more than 500ms.
      return () => {
        clearTimeout( handler );
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value, delay]
  );

  return debouncedValue;
};

export const ensureOnlyNumber = e => {
  if ( e.key === '.' || e.key === 'e' ) {
    e.preventDefault();
  }
};

// total / sum
export const customSum = array => {
  return array?.reduce( ( acc, curr ) => {
    return ( acc += curr );
  }, 0 );
};

// Covnert Decimal To In word

export const decimalToWord = ( number ) => {
  const toWords = new ToWords();
  return toWords.convert( number );
};


// Number to InWord
export const numberTowords = ( n ) => {
  if ( n < 20 ) return addEventListener[n];
  const digit = n % 10;
  if ( n < 100 ) return tens[~~( n / 10 ) - 2] + ( digit ? `-${ones[digit]}` : "" );
  if ( n < 1000 ) return `${ones[~~( n / 100 )]} hundred${n % 100 === 0 ? "" : ` ${numberTowords( n % 100 )}`}`;
  return `${numberTowords( ~~( n / 1000 ) )} thousand${n % 1000 !== 0 ? ` ${numberTowords( n % 1000 )}only` : ""}`;
};


export const convertNumberToWords = ( amount ) => {
  const words = new Array();
  words[0] = '';
  words[1] = 'One';
  words[2] = 'Two';
  words[3] = 'Three';
  words[4] = 'Four';
  words[5] = 'Five';
  words[6] = 'Six';
  words[7] = 'Seven';
  words[8] = 'Eight';
  words[9] = 'Nine';
  words[10] = 'Ten';
  words[11] = 'Eleven';
  words[12] = 'Twelve';
  words[13] = 'Thirteen';
  words[14] = 'Fourteen';
  words[15] = 'Fifteen';
  words[16] = 'Sixteen';
  words[17] = 'Seventeen';
  words[18] = 'Eighteen';
  words[19] = 'Nineteen';
  words[20] = 'Twenty';
  words[30] = 'Thirty';
  words[40] = 'Forty';
  words[50] = 'Fifty';
  words[60] = 'Sixty';
  words[70] = 'Seventy';
  words[80] = 'Eighty';
  words[90] = 'Ninety';
  amount = amount.toString();
  const atemp = amount.split( "." );
  const number = atemp[0].split( "," ).join( "" );
  const n_length = number.length;
  let words_string = "";
  if ( n_length <= 9 ) {
    const n_array = new Array( 0, 0, 0, 0, 0, 0, 0, 0, 0 );
    const received_n_array = new Array();
    for ( let i = 0; i < n_length; i++ ) {
      received_n_array[i] = number.substr( i, 1 );
    }
    for ( let i = 9 - n_length, j = 0; i < 9; i++, j++ ) {
      n_array[i] = received_n_array[j];
    }
    for ( let i = 0, j = 1; i < 9; i++, j++ ) {
      if ( i === 0 || i === 2 || i === 4 || i === 7 ) {
        if ( n_array[i] === 1 ) {
          n_array[j] = 10 + parseInt( n_array[j] );
          n_array[i] = 0;
        }
      }
    }
    let value = "";
    for ( let i = 0; i < 9; i++ ) {
      if ( i === 0 || i === 2 || i === 4 || i === 7 ) {
        value = n_array[i] * 10;
      } else {
        value = n_array[i];
      }
      if ( value !== 0 ) {
        words_string += `${words[value]} `;
      }
      if ( ( i === 1 && value !== 0 ) || ( i === 0 && value !== 0 && n_array[i + 1] === 0 ) ) {
        words_string += "Crores ";
      }
      if ( ( i === 3 && value !== 0 ) || ( i === 2 && value !== 0 && n_array[i + 1] === 0 ) ) {
        words_string += "Lakhs ";
      }
      if ( ( i === 5 && value !== 0 ) || ( i === 4 && value !== 0 && n_array[i + 1] === 0 ) ) {
        words_string += "Thousand ";
      }
      if ( i === 6 && value !== 0 && ( n_array[i + 1] !== 0 && n_array[i + 2] !== 0 ) ) {
        words_string += "Hundred ";
      } else if ( i === 6 && value !== 0 ) {
        words_string += "Hundred ";
      }
    }
    words_string = words_string.split( "  " ).join( " " );
  }
  return words_string;
};

export const convertDecimalToWords = ( n ) => {
  console.log( n );
  const nums = n.toString().split( '.' );
  const whole = convertNumberToWords( nums[0] );
  if ( nums.length === 2 ) {
    if ( nums[1] === '0000' ) {
      return whole;
    } else {
      const fraction = convertDecimalToWords( nums[1] );
      return `${whole}and ${fraction}`;
    }

  } else {
    return whole;
  }
};


/** Change Log
 * 27-March-2022 (Iqbal): Create A function for Serial Number in Dropdown
 */
