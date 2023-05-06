/*
  Title: Reducer for StyleDetails
  Description: Reducer for StyleDetails
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE,
  DEPARTMENT_CHANGE,
  FETCH_BUYER,
  FETCH_DEPARTMENT,
  FETCH_SEASON,
  FETCH_STYLE,
  FETCH_STYLE_DETAILS,
  FETCH_YEAR,
  LOADING,
  SEASON_CHANGE,
  STYLE_CHANGE,
  YEAR_CHANGE
} from './actionType';

export const initialState = {
  loading: false,
  styleDetails: {},
  buyers: [],
  selectedBuyer: null,
  isBuyerLoading: true,
  departments: [],
  selectedDepartment: null,
  isDepartmentLoading: true,
  years: [],
  selectedYear: null,
  isYearLoading: true,
  seasons: [],
  isSeasonsLoading: true,
  selectedSeason: null,
  styles: [],
  selectedStyle: null,
  isStyleLoading: true
};

export const styleDetailsReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER: {
      const buyerDDL = mapArrayToDropdown( payload.buyers, 'name', 'id' );
      return { ...state, buyers: buyerDDL, isBuyerLoading: true };
    }

    case BUYER_CHANGE: {
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
        isDepartmentLoading: true
      };
    }

    case FETCH_DEPARTMENT: {
      const departmentDDL = mapArrayToDropdown( payload.departments, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL, isDepartmentLoading: true };
    }

    case DEPARTMENT_CHANGE: {
      return {
        ...state,
        selectedDepartment: payload,
        selectedYear: null,
        years: [],
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        isYearLoading: true
      };
    }

    case FETCH_YEAR: {
      const yearDDL = mapArrayToDropdown( payload.years, 'year', 'year' );
      return { ...state, years: yearDDL, isYearLoading: payload.isYearLoading };
    }

    case YEAR_CHANGE: {
      return {
        ...state,
        selectedYear: payload,
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: [],
        isSeasonsLoading: true
      };
    }

    case FETCH_SEASON: {
      const seasonDDL = mapArrayToDropdown( payload.seasons, 'season', 'season' );
      return { ...state, seasons: seasonDDL, isSeasonsLoading: payload.isSeasonsLoading };
    }

    case SEASON_CHANGE: {
      return { ...state, selectedSeason: payload, selectedStyle: null, styles: [], isStyleLoading: true };
    }

    case FETCH_STYLE: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE: {
      return { ...state, selectedStyle: payload, styleDetails: {}, loading: false };
    }

    case FETCH_STYLE_DETAILS: {
      return { ...state, styleDetails: payload };
    }

    default:
      return {};
  }
};
