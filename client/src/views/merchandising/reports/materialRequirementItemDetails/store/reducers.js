/*
  Title: Reducer for MaterialRequirementItemDetails
  Description: Reducer for MaterialRequirementItemDetails
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/
import { FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const materialRequirementItemDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
