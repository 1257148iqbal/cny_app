/*
  Title: Reducer for MerchantBuyerWiseOrderValueDistribution
  Description: Reducer for MerchantBuyerWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/
import { FETCH_MERCHANT_BUYER_WISE_ORDER_VALUE_DISTRIBUTION, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: {},
  params: {},
  selectedItem: null
};

export const merchantBuyerWiseOrderValueDistributionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MERCHANT_BUYER_WISE_ORDER_VALUE_DISTRIBUTION: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
