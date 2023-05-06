/*
  Title: Reducer for PurchaseOrder
  Description: Reducer for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

import { mapArrayToDropdown } from '@utility/commonHelper';
import { BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP, FETCH_ALL_PO_BY_SO_ITEM_GROUP, FETCH_BUYER_PURCHASE_ORDER_ITEM_GROUP, FETCH_PURCHASE_ORDER_ITEM_GROUP, FETCH_STYLE_PURCHASE_ORDER_ITEM_GROUP, LOADING, PURCHASE_ORDER_CHANGE_PO_SO_ITEM_GROUP, STYLE_CHANGE_PURCHASE_ORDER_ITEM_GROUP } from './actionType';

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

export const purchaseOrderItemGroupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_PURCHASE_ORDER_ITEM_GROUP: {
      const buyerDDL = mapArrayToDropdown( payload, 'buyerName', 'buyerId' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP: {
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

    case FETCH_STYLE_PURCHASE_ORDER_ITEM_GROUP: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_PURCHASE_ORDER_ITEM_GROUP: {
      return { ...state, selectedStyle: payload, pos: [], selectedPo: null, poDDL: [], materailStatusStyleAndPoWise: [], loading: false, isPoLoading: true };
    }

    case FETCH_ALL_PO_BY_SO_ITEM_GROUP: {
      const poDDL = payload.data.map( item => ( {
        ...item,
        label: `${item.orderNumber} - ${item.shortName}`,
        value: item.id
      } ) );
      return { ...state, poDDL, isPoLoading: payload.isPoLoading };
    }

    case PURCHASE_ORDER_CHANGE_PO_SO_ITEM_GROUP: {
      return { ...state, selectedPo: payload, pos: {}, loading: false };
    }

    case FETCH_PURCHASE_ORDER_ITEM_GROUP: {
      return { ...state, pos: payload };
    }
    default:
      return {};
  }
};
