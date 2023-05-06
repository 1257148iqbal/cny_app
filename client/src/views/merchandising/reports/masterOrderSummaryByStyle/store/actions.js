/*
  Title: Actions for MasterOrderSummaryByStyle
  Description: Actions for MasterOrderSummaryByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

import { baseAxios } from '@services';
import { MASTER_ORDER_SUMMARY_BY_STYLE_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_MASTER_ORDER_SUMMARY_BY_STYLE } from './actionType';

//Get Data by Query
export const fetchMasterOrderSummaryByStyle = ( fromDate, toDate ) => async dispatch => {
  const response = await baseAxios.get( MASTER_ORDER_SUMMARY_BY_STYLE_API.fetch_order_summary_by_style( fromDate, toDate ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_MASTER_ORDER_SUMMARY_BY_STYLE,
    payload: data
  } );
};
