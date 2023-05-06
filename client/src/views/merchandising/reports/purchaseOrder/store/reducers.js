/*
  Title: Reducer for PurchaseOrder
  Description: Reducer for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import { BUYER_CHANGE_PURCHASE_ORDER, FETCH_ALL_PO_BY_SUPPLIER_ORDER, FETCH_BUYER_PURCHASE_ORDER, FETCH_PURCHASE_ORDER, FETCH_STYLE_PURCHASE_ORDER, LOADING, PURCHASE_ORDER_CHANGE_PO_SUPPLIER_ORDER, STYLE_CHANGE_PURCHASE_ORDER } from './actionType';

const initialState = {
  loading: false,
  pos: {},
  poDDL: [],
  selectedPo: null,
  buyers: [],
  selectedBuyer: null,
  styles: [],
  selectedStyle: null,
  isStyleLoading: true,
  isPoLoading: true
};

export const purchaseOrderReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }


    case FETCH_BUYER_PURCHASE_ORDER: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_PURCHASE_ORDER: {
      return {
        ...state,
        selectedBuyer: payload,
        selectedStyle: null,
        styles: [],
        pos: [],
        selectedPo: [],
        isStyleLoading: true,
        isPoLoading: true,
        loading: false
      };
    }

    case FETCH_STYLE_PURCHASE_ORDER: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_PURCHASE_ORDER: {
      return { ...state, selectedStyle: payload, pos: [], selectedPo: null, poDDL: [], materailStatusStyleAndPoWise: [], loading: false, isPoLoading: true };
    }

    case FETCH_ALL_PO_BY_SUPPLIER_ORDER: {
      const poDDL = payload.data.map( item => ( {
        ...item,
        label: `${item.orderNumber} - ${item.shortName}`,
        value: item.id
      } ) );
      return { ...state, poDDL, isPoLoading: payload.isPoLoading };
    }

    case PURCHASE_ORDER_CHANGE_PO_SUPPLIER_ORDER: {
      return { ...state, selectedPo: payload, pos: {}, loading: false };
    }

    case FETCH_PURCHASE_ORDER: {
      return { ...state, pos: payload };
    }
    default:
      return {};
  }
};
