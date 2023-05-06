/*
  Title: Reducer for PurchaseOrder
  Description: Reducer for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  FETCH_ALL_PO_BY_SO_STYLE_AND_ITEM_WISE,
  FETCH_BUYER_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  FETCH_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  FETCH_PURCHASE_ORDER_STYLE_AND_PO_WISE,
  FETCH_STYLE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  LOADING,
  PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE,
  STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE,
  STYLE_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE
} from './actionType';

const initialState = {
  loading: false,
  pos: {},
  poDDL: [],
  selectedPo: null,
  selectedPoAndStyle: null,
  buyers: [],
  selectedBuyer: null,
  styles: [],
  selectedStyle: null,
  isStyleLoading: true,
  isPoLoading: true
};

export const purchaseOrderStyleAndItemWiseReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_PURCHASE_ORDER_STYLE_AND_ITEM_WISE: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE: {
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

    case FETCH_STYLE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE: {
      return { ...state, selectedStyle: payload, pos: [], selectedPo: null, poDDL: [], loading: false, isPoLoading: true };
    }

    case FETCH_ALL_PO_BY_SO_STYLE_AND_ITEM_WISE: {
      const poDDL = payload.data.map( item => ( {
        ...item,
        label: `${item.orderNumber} - ${item.shortName}`,
        value: item.id
      } ) );
      return { ...state, poDDL, isPoLoading: payload.isPoLoading };
    }

    case PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE: {
      return { ...state, selectedPo: payload, selectedPoAndStyle: null };
    }

    case FETCH_PURCHASE_ORDER_STYLE_AND_ITEM_WISE: {
      return { ...state, pos: payload };
    }

    case STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE: {
      return { ...state, selectedPoAndStyle: payload, pos: {}, loading: false };
    }

    case FETCH_PURCHASE_ORDER_STYLE_AND_PO_WISE: {
      return { ...state, pos: payload };
    }
    default:
      return {};
  }
};
