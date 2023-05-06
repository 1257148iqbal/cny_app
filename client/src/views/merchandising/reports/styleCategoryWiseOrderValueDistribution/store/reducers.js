/*
  Title: Reducer for StyleCategoryWiseOrderValueDistribution
  Description: Reducer for StyleCategoryWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/
import { FETCH_STYLE_CATEGORY_WISE_ORDER_VALUE_DISTRIBUTION, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: {},
  params: {},
  selectedItem: null
};

export const styleCategoryWiseOrderValueDistributionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_STYLE_CATEGORY_WISE_ORDER_VALUE_DISTRIBUTION: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
