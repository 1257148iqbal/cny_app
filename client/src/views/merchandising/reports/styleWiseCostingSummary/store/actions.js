/*
  Title: Actions for StyleSummaryBuyerAndStyleWise
  Description: Actions for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/

import { baseAxios } from '@services';
import { STYLES_DETAILS_API, STYLE_WISE_COSTING_SUMMARY_API } from '@services/api-end-points/merchandising/v1';
import { v4 as uuid } from 'uuid';
import {
  FETCH_BUYER_COSTING_SUMMARY,
  FETCH_DEPARTMENT_COSTING_SUMMARY,
  FETCH_SEASON_COSTING_SUMMARY,
  FETCH_STYLE_COSTING_SUMMARY,
  FETCH_STYLE_WISE_COSTING_SUMMARY,
  FETCH_YEAR_COSTING_SUMMARY
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyers = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const allBuyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_COSTING_SUMMARY,
    payload: allBuyers
  } );
};

//fetch department by buyer
export const fetchDepartmentByBuyer = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_department_by_buyer( buyerId ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_DEPARTMENT_COSTING_SUMMARY,
    payload: departments
  } );
};

//fetch year by department
export const fetchYearByDepartment = buyerDepartmentId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_year_by_department( buyerDepartmentId ) );
  const years = response.data.data;
  dispatch( {
    type: FETCH_YEAR_COSTING_SUMMARY,
    payload: years
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchSeasonByBuyerDepartmentAndYear = ( buyerId, buyerDepartmentId, year ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_season_by_buyer_department_year( buyerId, buyerDepartmentId, year ) );
  const seasons = response.data.data;
  dispatch( {
    type: FETCH_SEASON_COSTING_SUMMARY,
    payload: seasons
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchStyleByBuyerDepartmentYearAndSeason = ( buyerId, buyerDepartmentId, year, season ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer_department_year_season( buyerId, buyerDepartmentId, year, season ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_COSTING_SUMMARY,
    payload: styles
  } );
};

//Get Data by Query
export const fetchStyleWiseCostingSummary = styleId => async dispatch => {
  const response = await baseAxios.get( STYLE_WISE_COSTING_SUMMARY_API.fetch_style_wise_costing_summary_by_style( styleId ) );
  const styleDetails = {
    ...response.data.data,
    costingDetails: response.data.data.costingDetails.map( item => ( {
      ...item,
      id: uuid()
    } ) )
  };
  dispatch( {
    type: FETCH_STYLE_WISE_COSTING_SUMMARY,
    payload: styleDetails
  } );
};
