/*
  Title: Reducer for MonthlyOrderSummary
  Description: Reducer for MonthlyOrderSummary
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/
import { FETCH_MONTHLY_ORDER_SUMMARY, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: {},
  params: {},
  selectedItem: null
};

export const monthlyOrderSummaryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MONTHLY_ORDER_SUMMARY: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
