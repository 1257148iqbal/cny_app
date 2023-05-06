/*
  Title: Reducer for WeeklyShipmentSchedule
  Description: Reducer for WeeklyShipmentSchedule
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/
import { FETCH_WEEKLY_SHIPMENT_SCHEDULE, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const weeklyShipmentScheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_WEEKLY_SHIPMENT_SCHEDULE: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
