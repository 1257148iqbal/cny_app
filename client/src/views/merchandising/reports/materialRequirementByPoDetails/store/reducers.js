/*
  Title: Reducer for MaterialRequirementByPoDetails
  Description: Reducer for MaterialRequirementByPoDetails
  Author: Iqbal Hossain
  Date: 17-August-2022
  Modified: 17-August-2022
*/
import { FETCH_MATERIAL_REQUIREMENT_BY_PO_DETAILS, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const materialRequirementByPoDetailsReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MATERIAL_REQUIREMENT_BY_PO_DETAILS: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
