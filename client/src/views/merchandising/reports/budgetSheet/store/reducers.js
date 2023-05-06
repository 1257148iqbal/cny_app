/*
  Title: Reducer for BudgetSheet
  Description: Reducer for BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  CHANGE_BUDGET_BY_BUYER,
  CHANGE_BUYER_BUDGET_SHEET,
  FETCH_ALL_BUYER_BUDGET_SHEET,
  FETCH_BUDGET_BY_BUYER,
  FETCH_BUDGET_SHEET,
  LOADING
} from './actionType';

const initialState = {
  loading: false,
  items: [],
  buyers: [],
  selectedBuyer: null,
  budgets: [],
  selectedBudget: null,
  budgetSheet: {},
  isBudgetLoading: true,
  isBudgetSheetLoading: true
};

export const budgetSheetReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_ALL_BUYER_BUDGET_SHEET: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case CHANGE_BUYER_BUDGET_SHEET: {
      return { ...state, selectedBuyer: payload, budgets: [], selectedBudget: null, budgetSheet: {}, isBudgetLoading: true, loading: false };
    }

    case FETCH_BUDGET_BY_BUYER: {
      const budgetDDL = mapArrayToDropdown( payload.budgets, 'budgetNumber', 'id' );
      return { ...state, budgets: budgetDDL, isBudgetLoading: payload.isBudgetLoading };
    }

    case CHANGE_BUDGET_BY_BUYER: {
      return { ...state, selectedBudget: payload, budgetSheet: {}, isBudgetSheetLoading: false, loading: false };
    }

    case FETCH_BUDGET_SHEET: {
      return { ...state, budgetSheet: payload.budgetSheet };
    }
    default:
      return {};
  }
};
