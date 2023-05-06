/*
  Title: Actions for SixMonthOrderValueByBuyer
  Description: Actions for SixMonthOrderValueByBuyer
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

import { baseAxios } from '@services';
import { SIX_MONTH_ORDER_VALUE_BY_BUYER_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_ALL_STATUS_FROM_PO, FETCH_SIX_MONTH_ORDER_VALUE_BY_BUYER } from './actionType';

//fetch all buyer from style
export const fetchAllStatus = () => async dispatch => {
  const response = await baseAxios.get( `${SIX_MONTH_ORDER_VALUE_BY_BUYER_API.fetch_all_status_from_po}` );
  const allStatus = response.data.data;
  dispatch( {
    type: FETCH_ALL_STATUS_FROM_PO,
    payload: allStatus
  } );
};

//Get Data by Query
export const fetchSixMonthOrderValueByBuyer = ( buyerStatus, fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.get( SIX_MONTH_ORDER_VALUE_BY_BUYER_API.fetch_order_value_by_buyers( buyerStatus, fromDate, toDate ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_SIX_MONTH_ORDER_VALUE_BY_BUYER,
    payload: data
  } );
};
