/*
  Title: Reducer for SixMonthOrderByBuyerDepartment
  Description: Reducer for SixMonthOrderByBuyerDepartment
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/
import { FETCH_SIX_MONTH_ORDER_BY_BUYER_DEPARTMENT, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const sixMonthOrderByBuyerDepartmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_SIX_MONTH_ORDER_BY_BUYER_DEPARTMENT: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
