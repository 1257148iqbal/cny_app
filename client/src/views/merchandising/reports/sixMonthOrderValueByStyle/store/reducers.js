/*
  Title: Reducer for SixMonthOrderValueByStyle
  Description: Reducer for SixMonthOrderValueByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  FETCH_SIX_MONTH_ORDER_VALUE_BY_STYLE,
  FETCH_STATUS_STATUS_ORDER_VALUE_BY_STYLE,
  FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_STYLE,
  LOADING,
  STATUS_CHANGE_ORDER_VALUE_BY_STYLE
} from './actionType';

const initialState = {
  loading: false,
  orderValueByStyle: {},
  statusDDL: [],
  selectedStatus: null
};

export const sixMonthOrderValueByStyleReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_STATUS_STATUS_ORDER_VALUE_BY_STYLE: {
      const statusDDL = mapArrayToDropdown( payload, 'status', 'status' );
      return { ...state, statusDDL };
    }

    case STATUS_CHANGE_ORDER_VALUE_BY_STYLE: {
      return { ...state, selectedStatus: payload };
    }

    case FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_STYLE: {
      return { ...state, orderValueByStyle: {}, loading: false };
    }

    case FETCH_SIX_MONTH_ORDER_VALUE_BY_STYLE: {
      return { ...state, orderValueByStyle: payload };
    }
    default:
      return {};
  }
};
