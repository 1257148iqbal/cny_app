/*
  Title: Reducer for OrderSummaryPOAndSytleWise
  Description: Reducer for OrderSummaryPOAndSytleWise
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  DEPARTMENT_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  FETCH_BUYER_ORDER_SUMMARY_PO_STYLE_WISE,
  FETCH_DEPARTMENT_ORDER_SUMMARY_PO_STYLE_WISE,
  FETCH_ORDER_SUMMARY_PO_AND_STYLE_WISE,
  FETCH_SEASON_ORDER_SUMMARY_PO_STYLE_WISE,
  FETCH_STYLE_ORDER_SUMMARY_PO_STYLE_WISE,
  FETCH_YEAR_ORDER_SUMMARY_PO_STYLE_WISE,
  LOADING,
  SEASON_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  STYLE_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  YEAR_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE
} from './actionType';

const initialState = {
  loading: false,
  orderSummaryPoStyleWise: {},
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

export const orderSummaryPOAndSytleWiseReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_ORDER_SUMMARY_PO_STYLE_WISE: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE: {
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

    case FETCH_DEPARTMENT_ORDER_SUMMARY_PO_STYLE_WISE: {
      const departmentDDL = mapArrayToDropdown( payload, 'buyerDepartment', 'buyerDepartmentId' );
      return { ...state, departments: departmentDDL };
    }

    case DEPARTMENT_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE: {
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

    case FETCH_YEAR_ORDER_SUMMARY_PO_STYLE_WISE: {
      const seasonDDL = mapArrayToDropdown( payload, 'year', 'year' );
      return { ...state, years: seasonDDL };
    }

    case YEAR_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE: {
      return {
        ...state,
        selectedYear: payload,
        selectedSeason: null,
        seasons: [],
        selectedStyle: null,
        styles: []
      };
    }

    case FETCH_SEASON_ORDER_SUMMARY_PO_STYLE_WISE: {
      const yearDDL = mapArrayToDropdown( payload, 'season', 'season' );
      return { ...state, seasons: yearDDL };
    }

    case SEASON_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE: {
      return { ...state, selectedSeason: payload, selectedStyle: null, styles: [] };
    }

    case FETCH_STYLE_ORDER_SUMMARY_PO_STYLE_WISE: {
      const styleDDL = mapArrayToDropdown( payload, 'styleNo', 'id' );
      return { ...state, styles: styleDDL };
    }

    case STYLE_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE: {
      return { ...state, selectedStyle: payload, orderSummaryPoStyleWise: {}, loading: false };
    }

    case FETCH_ORDER_SUMMARY_PO_AND_STYLE_WISE: {
      if ( !state.orderSummaryPoStyleWise.style ) {
        return { ...state, orderSummaryPoStyleWise: payload, payload: false };
      }
      return { ...state, orderSummaryPoStyleWise: payload };
    }
    default:
      return {};
  }
};
