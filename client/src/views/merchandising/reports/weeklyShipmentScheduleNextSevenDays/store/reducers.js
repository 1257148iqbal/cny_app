/*
  Title: Reducer for WeeklyShipmentScheduleNextSevenDays
  Description: Reducer for WeeklyShipmentScheduleNextSevenDays
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/
import { FETCH_WEEKLY_SHIPMENT_SCHEDULE_NEXT_SEVEN_DAYS, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const weeklyShipmentScheduleNextSevenDaysReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_WEEKLY_SHIPMENT_SCHEDULE_NEXT_SEVEN_DAYS: {
      return { ...state, items: payload };
    }
    default:
      return {};
  }
};
