/*
  Title: Reducer for PurchaseOrder
  Description: Reducer for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  FETCH_ALL_PO_BY_SO_PI_STATEMENT,
  FETCH_ALL_SUPPLIER_PI_STATEMENT,
  FETCH_PURCHASE_ORDER_PI_STATEMENT,
  LOADING,
  PURCHASE_ORDER_CHANGE_PO_SO_PI_STATEMENT,
  SUPPLIER_PI_STATEMENT_CHANGE_PI_STATEMENT
} from './actionType';

const initialState = {
  loading: false,
  ipiStatement: {},
  poDDL: [],
  selectedPo: null,
  supplierPIDDL: [],
  selectedSupplierPI: null
};

export const piStatementReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_ALL_PO_BY_SO_PI_STATEMENT: {
      const poDDL = mapArrayToDropdown( payload, 'orderNumber', 'id' );
      return { ...state, poDDL };
    }

    case PURCHASE_ORDER_CHANGE_PO_SO_PI_STATEMENT: {
      return { ...state, selectedPo: payload, selectedSupplierPI: null };
    }

    case FETCH_ALL_SUPPLIER_PI_STATEMENT: {
      const supplierPIDDL = mapArrayToDropdown( payload, 'piNumber', 'id' );
      return { ...state, supplierPIDDL };
    }

    case SUPPLIER_PI_STATEMENT_CHANGE_PI_STATEMENT: {
      return { ...state, selectedSupplierPI: payload, ipiStatement: {}, spoAndAmount: [], loading: false };
    }

    case FETCH_PURCHASE_ORDER_PI_STATEMENT: {
      return { ...state, ipiStatement: payload };
    }

    default:
      return {};
  }
};
