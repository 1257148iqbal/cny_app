/*
  Title: Actions for MasterOrderSummaryByBuyer
  Description: Actions for MasterOrderSummaryByBuyer
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

import { baseAxios } from '@services';
import { MASTER_ORDER_SUMMARY_BY_BUYER_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_MASTER_ORDER_SUMMARY_BY_BUYER } from './actionType';

//Get Master Order Summary By Buyer
export const fetchMasterOrderSummaryByBuyer = ( fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.get( MASTER_ORDER_SUMMARY_BY_BUYER_API.fetch_order_summary_by_buyers( fromDate, toDate ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_MASTER_ORDER_SUMMARY_BY_BUYER,
    payload: data
  } );
};
