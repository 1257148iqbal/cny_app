/*
  Title: Actions for STYLE_DETAILS
  Description: Actions for STYLE_DETAILS
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/

import { baseAxios, merchandisingAxios } from '@services';
import { STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_BUYER, FETCH_DEPARTMENT, FETCH_SEASON, FETCH_STYLE, FETCH_STYLE_DETAILS, FETCH_YEAR } from './actionType';

//fetch all buyer from style
export const fetchAllBuyers = () => async dispatch => {
  const response = await merchandisingAxios.get( `${STYLES_DETAILS_API.fetch_buyers}` );
  const buyers = response.data.data;
  console.log( buyers );
  dispatch( {
    type: FETCH_BUYER,
    payload: { buyers, isBuyerLoading: !!buyers?.length }
  } );
};

//fetch department by buyer
export const fetchDepartmentByBuyer = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_department_by_buyer( buyerId ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_DEPARTMENT,
    payload: { departments, isDepartmentLoading: !!departments?.length }
  } );
};

//fetch year by department
export const fetchYearByDepartment = buyerDepartmentId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_year_by_department( buyerDepartmentId ) );
  const years = response.data.data;
  dispatch( {
    type: FETCH_YEAR,
    payload: { years, isYearLoading: !!years?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchSeasonByBuyerDepartmentAndYear = ( buyerId, buyerDepartmentId, year ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_season_by_buyer_department_year( buyerId, buyerDepartmentId, year ) );
  const seasons = response.data.data;
  dispatch( {
    type: FETCH_SEASON,
    payload: { seasons, isSeasonsLoading: !!seasons?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchStyleByBuyerDepartmentYearAndSeason = ( buyerId, buyerDepartmentId, year, season ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer_department_year_season( buyerId, buyerDepartmentId, year, season ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//fetch Style Details by style
export const fetchStyleDetailsByStyle = styleId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_styleDetails_by_style( styleId ) );
  const styleDetails = response.data.data;
  dispatch( {
    type: FETCH_STYLE_DETAILS,
    payload: styleDetails
  } );
};