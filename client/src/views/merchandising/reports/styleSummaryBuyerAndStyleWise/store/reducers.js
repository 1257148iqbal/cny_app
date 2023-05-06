/*
  Title: Reducer for StyleSummaryBuyerAndStyleWise
  Description: Reducer for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_STYLE_SUMMARY,
  DEPARTMENT_CHANGE_STYLE_SUMMARY,
  FETCH_BUYER_STYLE_SUMMARY,
  FETCH_DEPARTMENT_STYLE_SUMMARY,
  FETCH_SEASON_STYLE_SUMMARY,
  FETCH_STYLE_STYLE_SUMMARY,
  FETCH_STYLE_SUMMARY_BUYER_AND_STYLE_WISE,
  FETCH_YEAR_STYLE_SUMMARY,
  LOADING,
  SEASON_CHANGE_STYLE_SUMMARY,
  STYLE_CHANGE_STYLE_SUMMARY,
  YEAR_CHANGE_STYLE_SUMMARY
} from './actionType';

const initialState = {
  loading: false,
  summaryStyles: {},
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
  isBuyerLoading: true,
  isDepartmentLoading: true,
  isYearLoading: true,
  isSeasonsLoading: true,
  isStyleLoading: true
};

export const styleSummaryBuyerAndStyleWiseReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_STYLE_SUMMARY: {
      const buyerDDL = mapArrayToDropdown( payload.buyers, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL, isBuyerLoading: payload.isBuyerLoading };
    }

    case BUYER_CHANGE_STYLE_SUMMARY: {
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

    case FETCH_DEPARTMENT_STYLE_SUMMARY: {
      const departmentDDL = mapArrayToDropdown( payload.departments, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL, isDepartmentLoading: payload.isDepartmentLoading };
    }

    case DEPARTMENT_CHANGE_STYLE_SUMMARY: {
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

    case FETCH_YEAR_STYLE_SUMMARY: {
      const seasonDDL = mapArrayToDropdown( payload.years, 'year', 'year' );
      return { ...state, years: seasonDDL, isYearLoading: payload.isYearLoading };
    }

    case YEAR_CHANGE_STYLE_SUMMARY: {
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

    case FETCH_SEASON_STYLE_SUMMARY: {
      const yearDDL = mapArrayToDropdown( payload.seasons, 'season', 'season' );
      return { ...state, seasons: yearDDL, isSeasonsLoading: payload.isSeasonsLoading };
    }

    case SEASON_CHANGE_STYLE_SUMMARY: {
      return { ...state, selectedSeason: payload, selectedStyle: null, styles: [], isStyleLoading: true };
    }

    case FETCH_STYLE_STYLE_SUMMARY: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_STYLE_SUMMARY: {
      return { ...state, selectedStyle: payload, summaryStyles: {}, loading: false };
    }

    case FETCH_STYLE_SUMMARY_BUYER_AND_STYLE_WISE: {
      return { ...state, summaryStyles: payload };
    }
    default:
      return {};
  }
};
