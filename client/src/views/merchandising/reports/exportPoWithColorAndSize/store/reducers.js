/*
  Title: Reducer for ExportPoWithColorAndSize
  Description: Reducer for ExportPoWithColorAndSize
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_PO_WITH_COLOR_SIZE,
  DEPARTMENT_CHANGE_PO_WITH_COLOR_SIZE,
  FETCH_BUYER_PO_WITH_COLOR_SIZE,
  FETCH_DEPARTMENT_PO_WITH_COLOR_SIZE,
  FETCH_EXPORT_PO_WITH_COLOR_AND_SIZE,
  FETCH_SEASON_PO_WITH_COLOR_SIZE,
  FETCH_STYLE_PO_WITH_COLOR_SIZE,
  LOADING,
  SEASON_CHANGE_PO_WITH_COLOR_SIZE,
  STYLE_CHANGE_PO_WITH_COLOR_SIZE
} from './actionType';

const initialState = {
  loading: false,
  exportPoWithColorAndSizes: {},
  buyers: [],
  selectedBuyer: null,
  departments: [],
  selectedDepartment: null,
  seasons: [],
  selectedSeason: null,
  styles: [],
  selectedStyle: null,
  costings: [],
  selectedCosting: null,
  isPoLoading: false
};

export const exprotPoWithColorAndSizeReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_PO_WITH_COLOR_SIZE: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_PO_WITH_COLOR_SIZE: {
      return {
        ...state,
        selectedBuyer: payload,
        selectedDepartment: null,
        departments: [],
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: []
      };
    }

    case FETCH_DEPARTMENT_PO_WITH_COLOR_SIZE: {
      const departmentDDL = mapArrayToDropdown( payload, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL };
    }

    case DEPARTMENT_CHANGE_PO_WITH_COLOR_SIZE: {
      return {
        ...state,
        selectedDepartment: payload,
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: []
      };
    }

    case FETCH_SEASON_PO_WITH_COLOR_SIZE: {
      const yearDDL = mapArrayToDropdown( payload, 'season', 'season' );
      return { ...state, seasons: yearDDL };
    }

    case SEASON_CHANGE_PO_WITH_COLOR_SIZE: {
      return {
        ...state,
        selectedSeason: payload,
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: []
      };
    }

    case FETCH_STYLE_PO_WITH_COLOR_SIZE: {
      const styleDDL = mapArrayToDropdown( payload, 'styleNo', 'id' );
      return { ...state, styles: styleDDL };
    }

    case STYLE_CHANGE_PO_WITH_COLOR_SIZE: {
      return {
        ...state,
        selectedStyle: payload,
        selectedCosting: null,
        costings: [],
        exportPoWithColorAndSizes: {},
        loading: false,
        isPoLoading: false
      };
    }

    case FETCH_EXPORT_PO_WITH_COLOR_AND_SIZE: {
      return { ...state, exportPoWithColorAndSizes: payload.data, isPoLoading: payload.isPoLoading };
    }
    default:
      return {};
  }
};
