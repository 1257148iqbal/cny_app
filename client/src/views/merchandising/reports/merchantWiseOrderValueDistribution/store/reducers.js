/*
  Title: Reducer for MerchantWiseOrderValueDistribution
  Description: Reducer for MerchantWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 16-August-2022
  Modified: 16-August-2022
*/
import { FETCH_MERCHANT_WISE_ORDER_VALUE_DISTRIBUTION, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: {},
  params: {},
  selectedItem: null
};

export const merchantWiseOrderValueDistributionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MERCHANT_WISE_ORDER_VALUE_DISTRIBUTION: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
