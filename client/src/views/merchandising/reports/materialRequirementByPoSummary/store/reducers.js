/*
  Title: Reducer for MaterialRequirementByPoSummary
  Description: Reducer for MaterialRequirementByPoSummary
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/
import { FETCH_MATERIAL_REQUIREMENT_BY_PO_SUMMARY, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const materialRequirementByPoSummaryReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_MATERIAL_REQUIREMENT_BY_PO_SUMMARY: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
