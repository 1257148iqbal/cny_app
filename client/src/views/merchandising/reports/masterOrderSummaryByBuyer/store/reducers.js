/*
  Title: Reducer for MasterOrderSummaryByBuyer
  Description: Reducer for MasterOrderSummaryByBuyer
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/
import { FETCH_MASTER_ORDER_SUMMARY_BY_BUYER, FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER, LOADING } from './actionType';

const initialState = {
  loading: false,
  orderSummaryByBuyers: {}
};

export const masterOrderSummaryByBuyerReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER: {
      return { ...state, orderSummaryByBuyers: {}, loading: false };
    }

    case FETCH_MASTER_ORDER_SUMMARY_BY_BUYER: {
      return { ...state, orderSummaryByBuyers: payload };
    }
    default:
      return {};
  }
};
