/*
  Title: Actions for BudgetSheet
  Description: Actions for BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/

import { baseAxios } from '@services';
import { BUDGET_SHEET_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_ALL_BUYER_BUDGET_SHEET, FETCH_BUDGET_BY_BUYER, FETCH_BUDGET_SHEET } from './actionType';

//Get All buyer from styles
export const fetchAllBuyerBudgetSheets = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const buyers = response.data.data;
  dispatch( {
    type: FETCH_ALL_BUYER_BUDGET_SHEET,
    payload: buyers
  } );
};

//Get All buyer from styles
export const fetchBudgetByBuyerId = buyerId => async dispatch => {
  const response = await baseAxios.get( `${BUDGET_SHEET_API.fetch_budget_by_buyerId( buyerId )}` );
  const budgets = response.data.data;
  dispatch( {
    type: FETCH_BUDGET_BY_BUYER,
    payload: { budgets, isBudgetLoading: !!budgets?.length }
  } );
};

//Get Data by Query
export const fetchBudgetSheet = budgetId => async dispatch => {
  const response = await baseAxios.get( `${BUDGET_SHEET_API.fetch_budget_sheet_by_Id( budgetId )}` );
  const budgetSheet = response.data.data;
  dispatch( {
    type: FETCH_BUDGET_SHEET,
    payload: { budgetSheet, isBudgetSheetLoading: !!budgetSheet?.budgetNumber }
  } );
};
