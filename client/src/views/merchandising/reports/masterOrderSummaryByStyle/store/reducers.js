/*
  Title: Reducer for MasterOrderSummaryByStyle
  Description: Reducer for MasterOrderSummaryByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/
import { FETCH_MASTER_ORDER_SUMMARY_BY_STYLE, FROM_DATE_CHANGE_ORDER_SUMMARY_BY_STYLE, LOADING } from './actionType';

const initialState = {
  loading: false,
  orderSummaryByStyle: {}
};

export const masterOrderSummaryByStyleReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FROM_DATE_CHANGE_ORDER_SUMMARY_BY_STYLE: {
      return { ...state, orderSummaryByStyle: {}, loading: false };
    }

    case FETCH_MASTER_ORDER_SUMMARY_BY_STYLE: {
      return { ...state, orderSummaryByStyle: payload };
    }
    default:
      return {};
  }
};
