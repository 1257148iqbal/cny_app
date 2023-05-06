/*
  Title: Reducer for SixMonthOrderValueByBuyer
  Description: Reducer for SixMonthOrderValueByBuyer
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  FETCH_ALL_STATUS_FROM_PO,
  FETCH_SIX_MONTH_ORDER_VALUE_BY_BUYER,
  FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_BUYER,
  LOADING,
  STATUS_CHANGE_ORDER_VALUE_BY_BUYER
} from './actionType';

const initialState = {
  loading: false,
  orderValueByBuyers: {},
  statusDDL: [],
  selectedStatus: null
};

export const sixMonthOrderValueByBuyerReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_ALL_STATUS_FROM_PO: {
      const statusDDL = mapArrayToDropdown( payload, 'status', 'status' );
      return { ...state, statusDDL };
    }

    case STATUS_CHANGE_ORDER_VALUE_BY_BUYER: {
      return { ...state, selectedStatus: payload };
    }

    case FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_BUYER: {
      return { ...state, orderValueByBuyers: {}, loading: false };
    }

    case FETCH_SIX_MONTH_ORDER_VALUE_BY_BUYER: {
      return { ...state, orderValueByBuyers: payload };
    }
    default:
      return {};
  }
};
