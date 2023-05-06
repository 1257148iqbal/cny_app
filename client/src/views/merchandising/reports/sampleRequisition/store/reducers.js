/*
  Title: Reducer for SampleRequisition
  Description: Reducer for SampleRequisition
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import { FETCH_SAMPLE_REQUISITION, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const sampleRequisitionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_SAMPLE_REQUISITION: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
