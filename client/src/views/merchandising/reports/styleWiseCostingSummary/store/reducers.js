/*
  Title: Reducer for StyleSummaryBuyerAndStyleWise
  Description: Reducer for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_COSTING_SUMMARY,
  DEPARTMENT_CHANGE_COSTING_SUMMARY,
  FETCH_BUYER_COSTING_SUMMARY,
  FETCH_DEPARTMENT_COSTING_SUMMARY,
  FETCH_SEASON_COSTING_SUMMARY,
  FETCH_STYLE_COSTING_SUMMARY,
  FETCH_STYLE_WISE_COSTING_SUMMARY,
  FETCH_YEAR_COSTING_SUMMARY,
  LOADING,
  SEASON_CHANGE_COSTING_SUMMARY,
  STYLE_CHANGE_COSTING_SUMMARY,
  YEAR_CHANGE_COSTING_SUMMARY
} from './actionType';

const initialState = {
  loading: false,
  costingSummary: {},
  buyers: [],
  selectedBuyer: null,
  departments: [],
  selectedDepartment: null,
  years: [],
  selectedYear: null,
  seasons: [],
  selectedSeason: null,
  styles: [],
  selectedStyle: null
};

export const styleWiseCostingSummaryReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_COSTING_SUMMARY: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_COSTING_SUMMARY: {
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
        styles: []
      };
    }

    case FETCH_DEPARTMENT_COSTING_SUMMARY: {
      const departmentDDL = mapArrayToDropdown( payload, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL };
    }

    case DEPARTMENT_CHANGE_COSTING_SUMMARY: {
      return {
        ...state,
        selectedDepartment: payload,
        selectedYear: null,
        years: [],
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: []
      };
    }

    case FETCH_YEAR_COSTING_SUMMARY: {
      const seasonDDL = mapArrayToDropdown( payload, 'year', 'year' );
      return { ...state, years: seasonDDL };
    }

    case YEAR_CHANGE_COSTING_SUMMARY: {
      return {
        ...state,
        selectedYear: payload,
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: []
      };
    }

    case FETCH_SEASON_COSTING_SUMMARY: {
      const yearDDL = mapArrayToDropdown( payload, 'season', 'season' );
      return { ...state, seasons: yearDDL };
    }

    case SEASON_CHANGE_COSTING_SUMMARY: {
      return { ...state, selectedSeason: payload, selectedStyle: null, styles: [] };
    }

    case FETCH_STYLE_COSTING_SUMMARY: {
      const styleDDL = mapArrayToDropdown( payload, 'styleNo', 'id' );
      return { ...state, styles: styleDDL };
    }

    case STYLE_CHANGE_COSTING_SUMMARY: {
      return { ...state, selectedStyle: payload, costingSummary: {}, loading: false };
    }

    case FETCH_STYLE_WISE_COSTING_SUMMARY: {
      return { ...state, costingSummary: payload };
    }
    default:
      return {};
  }
};
