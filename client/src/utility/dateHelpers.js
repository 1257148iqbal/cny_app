/*
     Title: Function for Date Formate
     Description: Function for Date Formate
     Author: Iqbal Hossain
     Date: 06-February-2022
     Modified: 09-April-2022
*/

import moment from 'moment';

export const serverDate = ( date, format = 'yyyy-MM-DD' ) => {
  return moment( date ).format( format );
};

export const serverTime = ( time, format = 'HH:MM' ) => {
  return moment( time ).format( format );
};

export const formattedDate = ( date, format = 'DD-MMM-yyyy' ) => {
  // get formatted, set default format : 13-Mar-2022
  return moment( date ).format( format );
};
export const formattedTime = ( time, format = 'hh:mm A' ) => {
  return moment( time, 'HH:mm:ss' ).format( format );
};

export const timeDiff = ( to, from ) => {
  const duration = moment( to, 'HH:mm:ss' ).diff( moment( from, 'HH:mm:ss' ), 'minutes' );
  return duration;
};

//Get First Date from Select Date/Month/Year
export const firstDateFromMonth = date => {
  return moment( date, 'YYYY-MM-DD' )
    .startOf( 'month' )
    .format( 'YYYY-MM-DD' );
};

//Get Last Date from Select Date/Month/Year
export const lastDateFromMonth = date => {
  return moment( date, 'YYYY-MM-DD' )
    .endOf( 'month' )
    .format( 'YYYY-MM-DD' );
};

export const monthNoToName = monthNumber => {
  const date = new Date();
  date.setMonth( monthNumber - 1 );
  if ( monthNumber !== 0 ) {
    return date.toLocaleString( 'en-US', {
      month: 'long'
    } );
  }
};
