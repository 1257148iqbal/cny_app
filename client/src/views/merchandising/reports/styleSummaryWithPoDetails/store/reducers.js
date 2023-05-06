/*
  Title: Reducer for StyleSummaryWithPoDetails
  Description: Reducer for StyleSummaryWithPoDetails
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/
import { FETCH_STYLE_SUMMARY_WITH_PO_DETAILS, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const styleSummaryWithPoDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_STYLE_SUMMARY_WITH_PO_DETAILS: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
