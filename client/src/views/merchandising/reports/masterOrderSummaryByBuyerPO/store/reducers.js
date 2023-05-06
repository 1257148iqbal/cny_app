/*
  Title: Reducer for MasterOrderSummaryByBuyerPO
  Description: Reducer for MasterOrderSummaryByBuyerPO
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/
import { FETCH_MASTER_ORDER_SUMMARY_BY_BUYER_PO, FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER_PO, LOADING } from './actionType';

const initialState = {
  loading: false,
  orderSummaryByBuyerPo: {},
  params: {},
  selectedItem: null
};

export const masterOrderSummaryByBuyerPOReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER_PO: {
      return { ...state, orderSummaryByBuyerPo: {}, loading: false };
    }

    case FETCH_MASTER_ORDER_SUMMARY_BY_BUYER_PO: {
      return { ...state, orderSummaryByBuyerPo: payload };
    }
    default:
      return {};
  }
};
