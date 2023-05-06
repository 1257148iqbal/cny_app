/*
  Title: Reducer for MaterialRequirementByStyle
  Description: Reducer for MaterialRequirementByStyle
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/
import { FETCH_MATERIAL_REQUIREMENT_BY_STYLE, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const materialRequirementByStyleReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MATERIAL_REQUIREMENT_BY_STYLE: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
