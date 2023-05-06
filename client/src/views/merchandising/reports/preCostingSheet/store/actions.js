/*
  Title: Actions for PreCosting Sheet
  Description: Actions for PreCosting Sheet
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/

import { baseAxios } from '@services';
import { PRE_COSTING_SHEET_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import {
  FETCH_BUYER_PRE_COSTING_SHEET,
  FETCH_COSTING_BY_STYLE,
  FETCH_DEPARTMENT_PRE_COSTING_SHEET,
  FETCH_PRE_COSTING_SHEET,
  FETCH_SEASON_PRE_COSTING_SHEET,
  FETCH_STYLE_PRE_COSTING_SHEET,
  FETCH_YEAR_PRE_COSTING_SHEET
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyers = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const buyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_PRE_COSTING_SHEET,
    payload: { buyers, isBuyerLoading: !!buyers?.length }
  } );
};

//fetch department by buyer
export const fetchDepartmentByBuyer = buyerIds => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_department_by_buyer( buyerIds ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_DEPARTMENT_PRE_COSTING_SHEET,
    payload: { departments, isDepartmentLoading: !!departments?.length }
  } );
};

//fetch year by department
export const fetchYearByDepartment = buyerDepartmentIds => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_year_by_department( buyerDepartmentIds ) );
  const years = response.data.data;
  dispatch( {
    type: FETCH_YEAR_PRE_COSTING_SHEET,
    payload: { years, isYearLoading: !!years?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchSeasonByBuyerDepartmentAndYear = ( buyerId, buyerDepartmentId, year ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_season_by_buyer_department_year( buyerId, buyerDepartmentId, year ) );
  const seasons = response.data.data;
  dispatch( {
    type: FETCH_SEASON_PRE_COSTING_SHEET,
    payload: { seasons, isSeasonsLoading: !!seasons?.length }
  } );
};

//fetch season by buyerId, buyerDepartmentId and year
export const fetchStyleByBuyerDepartmentYearAndSeason = ( buyerId, buyerDepartmentId, year, season ) => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer_department_year_season( buyerId, buyerDepartmentId, year, season ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_PRE_COSTING_SHEET,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//fetch costing by style
export const fetchCostingByStyle = styleId => async dispatch => {
  const response = await baseAxios.get( PRE_COSTING_SHEET_API.fetch_costing_by_style( styleId ) );
  const costings = response.data.data;
  dispatch( {
    type: FETCH_COSTING_BY_STYLE,
    payload: { costings, isCostingLoading: !!costings?.length }
  } );
};

export const fetchPreCostingSheet = styleId => async dispatch => {
  const response = await baseAxios.get( PRE_COSTING_SHEET_API.fetch_pre_costing_sheet_by_style( styleId ) );
  const costings = response.data.data;
  dispatch( {
    type: FETCH_PRE_COSTING_SHEET,
    payload: costings
  } );
};

//Get Data by Query
