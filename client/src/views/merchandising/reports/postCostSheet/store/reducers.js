/*
  Title: Reducer for PostCostSheet
  Description: Reducer for PostCostSheet
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/
import { FETCH_POST_COST_SHEET, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const postCostSheetReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_POST_COST_SHEET: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
