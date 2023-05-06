/*
  Title: Reducer for MaterialRequirementItemDetailsPoWise
  Description: Reducer for MaterialRequirementItemDetailsPoWise
  Author: Iqbal Hossain
  Date: 17-August-2022
  Modified: 17-August-2022
*/
import { FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS_PO_WISE, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const materialRequirementItemDetailsPoWiseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS_PO_WISE: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
