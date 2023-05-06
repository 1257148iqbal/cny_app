/*
  Title: Actions for ExportPoWithColorAndSize
  Description: Actions for ExportPoWithColorAndSize
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/

import { baseAxios } from '@services';
import { EXPORT_PO_WITH_COLOR_AND_SIZE_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import {
  FETCH_BUYER_PO_WITH_COLOR_SIZE,
  FETCH_DEPARTMENT_PO_WITH_COLOR_SIZE,
  FETCH_EXPORT_PO_WITH_COLOR_AND_SIZE,
  FETCH_SEASON_PO_WITH_COLOR_SIZE,
  FETCH_STYLE_PO_WITH_COLOR_SIZE
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyers = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const allBuyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_PO_WITH_COLOR_SIZE,
    payload: allBuyers
  } );
};

//fetch department by buyer
export const fetchDepartmentByBuyer = buyerIds => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_department_by_buyer( buyerIds ) );
  const departments = response.data.data;
  dispatch( {
    type: FETCH_DEPARTMENT_PO_WITH_COLOR_SIZE,
    payload: departments
  } );
};

//fetch season by buyerId, buyerDepartmentId
export const fetchSeasonByBuyerAndDepartment = ( buyerIds, departmentsIds ) => async dispatch => {
  const response = await baseAxios.get( EXPORT_PO_WITH_COLOR_AND_SIZE_API.fetch_season_by_buyer_department( buyerIds, departmentsIds ) );
  const seasons = response.data.data;
  dispatch( {
    type: FETCH_SEASON_PO_WITH_COLOR_SIZE,
    payload: seasons
  } );
};

//fetch style by buyerId, buyerDepartmentId and seasib
export const fetchStyleByBuyerDepartmentAndSeason = ( buyerIds, buyerDepartmentIds, seasons ) => async dispatch => {
  const response = await baseAxios.get(
    EXPORT_PO_WITH_COLOR_AND_SIZE_API.fetch_style_by_buyer_department_season( buyerIds, buyerDepartmentIds, seasons )
  );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_PO_WITH_COLOR_SIZE,
    payload: styles
  } );
};

//Get Data by Query
export const fetchExprotPoWithColorAndSize = ( styleIds, fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.post( EXPORT_PO_WITH_COLOR_AND_SIZE_API.fetch_export_po_with_color_size_by_style( styleIds, fromDate, toDate ) );
  const data = response.data.data;
  if ( data?.buyerWiseList?.length ) {
    dispatch( {
      type: FETCH_EXPORT_PO_WITH_COLOR_AND_SIZE,
      payload: { data, isPoLoading: true }
    } );
  } else {
    dispatch( {
      type: FETCH_EXPORT_PO_WITH_COLOR_AND_SIZE,
      payload: { data, isPoLoading: false }
    } );
  }
};
