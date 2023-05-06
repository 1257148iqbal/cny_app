/*
  Title: Actions for SixMonthOrderValueByStyle
  Description: Actions for SixMonthOrderValueByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

import { baseAxios } from '@services';
import { SIX_MONTH_ORDER_VALUE_BY_BUYER_API, SIX_MONTH_ORDER_VALUE_BY_STYLE_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_SIX_MONTH_ORDER_VALUE_BY_STYLE, FETCH_STATUS_STATUS_ORDER_VALUE_BY_STYLE } from './actionType';

//fetch all buyer from style
export const fetchAllStatus = () => async dispatch => {
  const response = await baseAxios.get( `${SIX_MONTH_ORDER_VALUE_BY_BUYER_API.fetch_all_status_from_po}` );
  const allStatus = response.data.data;
  dispatch( {
    type: FETCH_STATUS_STATUS_ORDER_VALUE_BY_STYLE,
    payload: allStatus
  } );
};

//Get Data by Query
export const fetchSixMonthOrderValueByStyle = ( buyerStatus, fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.get( SIX_MONTH_ORDER_VALUE_BY_STYLE_API.fetch_order_value_by_styles( buyerStatus, fromDate, toDate ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_SIX_MONTH_ORDER_VALUE_BY_STYLE,
    payload: data
  } );
};
