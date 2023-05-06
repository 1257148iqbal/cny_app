/*
  Title: Reducer for AverageCMValueByStyleCategory
  Description: Reducer for AverageCMValueByStyleCategory
  Author: Iqbal Hossain
  Date: 21-August-2022
  Modified: 21-August-2022
*/
import { FETCH_AVERAGE_CM_VALUE_BY_STYLE_CATEGORY, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const averageCMValueByStyleCategoryReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_AVERAGE_CM_VALUE_BY_STYLE_CATEGORY: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
