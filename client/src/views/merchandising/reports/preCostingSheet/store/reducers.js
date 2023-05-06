/*
  Title: Reducer for StyleDetails
  Description: Reducer for StyleDetails
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_PRE_COSTING_SHEET,
  COSTING_BY_STYLE_CHANGE,
  DEPARTMENT_CHANGE_PRE_COSTING_SHEET,
  FETCH_BUYER_PRE_COSTING_SHEET,
  FETCH_COSTING_BY_STYLE,
  FETCH_DEPARTMENT_PRE_COSTING_SHEET,
  FETCH_PRE_COSTING_SHEET,
  FETCH_SEASON_PRE_COSTING_SHEET,
  FETCH_STYLE_PRE_COSTING_SHEET,
  FETCH_YEAR_PRE_COSTING_SHEET,
  LOADING,
  SEASON_CHANGE_PRE_COSTING_SHEET,
  STYLE_CHANGE_PRE_COSTING_SHEET,
  YEAR_CHANGE_PRE_COSTING_SHEET
} from './actionType';

const initialState = {
  loading: false,
  preCostingSheets: {},
  buyers: [],
  selectedBuyer: null,
  departments: [],
  selectedDepartment: null,
  years: [],
  selectedYear: null,
  seasons: [],
  selectedSeason: null,
  styles: [],
  selectedStyle: null,
  costings: [],
  selectedCosting: null,
  isBuyerLoading: true,
  isDepartmentLoading: true,
  isYearLoading: true,
  isSeasonsLoading: true,
  isStyleLoading: true,
  isCostingLoading: true
};

export const preCostingSheetReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_PRE_COSTING_SHEET: {
      const buyerDDL = mapArrayToDropdown( payload.buyers, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL, isBuyerLoading: payload.isBuyerLoading };
    }

    case BUYER_CHANGE_PRE_COSTING_SHEET: {
      return {
        ...state,
        selectedBuyer: payload,
        selectedDepartment: null,
        departments: [],
        selectedYear: null,
        years: [],
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: [],
        isDepartmentLoading: true
      };
    }

    case FETCH_DEPARTMENT_PRE_COSTING_SHEET: {
      const departmentDDL = mapArrayToDropdown( payload.departments, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL, isDepartmentLoading: payload.isDepartmentLoading };
    }

    case DEPARTMENT_CHANGE_PRE_COSTING_SHEET: {
      return {
        ...state,
        selectedDepartment: payload,
        selectedYear: null,
        years: [],
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: [],
        isYearLoading: true
      };
    }

    case FETCH_YEAR_PRE_COSTING_SHEET: {
      const seasonDDL = mapArrayToDropdown( payload.years, 'year', 'year' );
      return { ...state, years: seasonDDL, isYearLoading: payload.isYearLoading };
    }

    case YEAR_CHANGE_PRE_COSTING_SHEET: {
      return {
        ...state,
        selectedYear: payload,
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: [],
        isSeasonsLoading: true
      };
    }

    case FETCH_SEASON_PRE_COSTING_SHEET: {
      const yearDDL = mapArrayToDropdown( payload.seasons, 'season', 'season' );
      return { ...state, seasons: yearDDL, isSeasonsLoading: payload.isSeasonsLoading };
    }

    case SEASON_CHANGE_PRE_COSTING_SHEET: {
      return {
        ...state,
        selectedSeason: payload,
        selectedStyle: null,
        styles: [],
        selectedCosting: null,
        costings: [],
        isStyleLoading: true
      };
    }

    case FETCH_STYLE_PRE_COSTING_SHEET: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_PRE_COSTING_SHEET: {
      return { ...state, selectedStyle: payload, selectedCosting: null, costings: [], isCostingLoading: true };
    }

    case FETCH_COSTING_BY_STYLE: {
      const costingDDL = mapArrayToDropdown( payload.costings, 'costingNumber', 'id' );
      return { ...state, costings: costingDDL, isCostingLoading: payload.isCostingLoading };
    }

    case COSTING_BY_STYLE_CHANGE: {
      return { ...state, selectedCosting: payload, preCostingSheets: {}, loading: false };
    }

    case FETCH_PRE_COSTING_SHEET: {
      return { ...state, preCostingSheets: payload };
    }
    default:
      return {};
  }
};
