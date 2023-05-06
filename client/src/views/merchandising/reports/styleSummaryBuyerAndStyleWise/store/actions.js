/*
  Title: Actions for StyleSummaryBuyerAndStyleWise
  Description: Actions for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/

import { baseAxios } from '@services';
import { STYLES_DETAILS_API, STYLE_SUMMARY_BUYER_AND_STYLE_WISE_API } from '@services/api-end-points/merchandising/v1';
import {
  FETCH_BUYER_STYLE_SUMMARY,
  FETCH_DEPARTMENT_STYLE_SUMMARY,
  FETCH_SEASON_STYLE_SUMMARY,
  FETCH_STYLE_STYLE_SUMMARY,
  FETCH_STYLE_SUMMARY_BUYER_AND_STYLE_WISE,
  FETCH_YEAR_STYLE_SUMMARY
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyers = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const buyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_STYLE_SUMMARY,
    payload: { buyers, isBuyerLoading: !!buyers?.length }
  } );
};

//fetch department by buyer
export const fetchDepartmentByBuyer = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_department_by_buyer( buyerId ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_DEPARTMENT_STYLE_SUMMARY,
    payload: { departments, isDepartmentLoading: !!departments?.length }
  } );
};

//fetch year by department
export const fetchYearByDepartment = buyerDepartmentId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_year_by_department( buyerDepartmentId ) );
  const years = response.data.data;
  dispatch( {
    type: FETCH_YEAR_STYLE_SUMMARY,
    payload: { years, isYearLoading: !!years?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchSeasonByBuyerDepartmentAndYear = ( buyerId, buyerDepartmentId, year ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_season_by_buyer_department_year( buyerId, buyerDepartmentId, year ) );
  const seasons = response.data.data;
  dispatch( {
    type: FETCH_SEASON_STYLE_SUMMARY,
    payload: { seasons, isSeasonsLoading: !!seasons?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchStyleByBuyerDepartmentYearAndSeason = ( buyerId, buyerDepartmentId, year, season ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer_department_year_season( buyerId, buyerDepartmentId, year, season ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_STYLE_SUMMARY,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//Get Data by Query
export const fetchStyleSummaryBuyerAndStyleWise = styleId => async dispatch => {
  const response = await baseAxios.get( STYLE_SUMMARY_BUYER_AND_STYLE_WISE_API.fetch_summary_style_by_style( styleId ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_STYLE_SUMMARY_BUYER_AND_STYLE_WISE,
    payload: departments
  } );
};
