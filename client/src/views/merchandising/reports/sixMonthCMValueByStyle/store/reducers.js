/*
  Title: Reducer for SixMonthCMValueByStyle
  Description: Reducer for SixMonthCMValueByStyle
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/
import { FETCH_SIX_MONTH_CM_VALUE_BY_STYLE, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const sixMonthCMValueByStyleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_SIX_MONTH_CM_VALUE_BY_STYLE: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
