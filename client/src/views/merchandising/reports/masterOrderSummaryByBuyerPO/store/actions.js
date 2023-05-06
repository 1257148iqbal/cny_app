/*
  Title: Actions for MasterOrderSummaryByBuyerPO
  Description: Actions for MasterOrderSummaryByBuyerPO
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

import { baseAxios } from '@services';
import { MASTER_ORDER_SUMMARY_BY_BUYER_PO_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_MASTER_ORDER_SUMMARY_BY_BUYER_PO } from './actionType';

//Get Data by Query
export const fetchMasterOrderSummaryByBuyerPO = ( fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.get( MASTER_ORDER_SUMMARY_BY_BUYER_PO_API.fetch_order_summary_by_buyer_po( fromDate, toDate ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_MASTER_ORDER_SUMMARY_BY_BUYER_PO,
    payload: data
  } );
};
