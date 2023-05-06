/*
  Title: Actions for PurchaseOrder
  Description: Actions for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

import { baseAxios } from '@services';
import { PURCHASE_ORDER_API, PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import {
  FETCH_ALL_PO_BY_SO_STYLE_AND_ITEM_WISE,
  FETCH_BUYER_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  FETCH_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
  FETCH_PURCHASE_ORDER_STYLE_AND_PO_WISE,
  FETCH_STYLE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyersPurchaseOrderStyleAndItemWise = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const allBuyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
    payload: allBuyers
  } );
};

//fetch season by buyerId
export const fetchStyleByBuyerPurchaseOrderStyleAndItemWise = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer( buyerId ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//fetch all po buyer from style
export const fetchAllPosStyleAndItemWiseByStyleId = ( styleId, searchKey ) => async dispatch => {
  let response;
  if ( styleId !== null && styleId ) {
    response = await baseAxios.get( `${PURCHASE_ORDER_API.fetch_all_po_from_supplier_orders}`, { params: { styleId } } );
  } else if ( searchKey ) {
    response = await baseAxios.get( `${PURCHASE_ORDER_API.fetch_all_po_from_supplier_orders}`, { params: { searchKey } } );
  } else {
    response = await baseAxios.get( PURCHASE_ORDER_API.fetch_all_po_from_supplier_orders );
  }
  const data = response.data.data;

  if ( data?.length ) {
    dispatch( {
      type: FETCH_ALL_PO_BY_SO_STYLE_AND_ITEM_WISE,
      payload: { data, isPoLoading: !!data?.length }
    } );
  }
};


//Get Data by Query
export const fetchPurchaseOrderStyleAndItemWise = id => async dispatch => {
  const response = await baseAxios.get( PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API.fetch_po_style_and_item_wise_by_so_id( id ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_PURCHASE_ORDER_STYLE_AND_ITEM_WISE,
    payload: data
  } );
};

//Get Data by Query
export const fetchPurchaseOrderStyleAndPoWise = id => async dispatch => {
  const response = await baseAxios.get( PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API.fetch_po_style_and_po_wise_by_so_id( id ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_PURCHASE_ORDER_STYLE_AND_PO_WISE,
    payload: data
  } );
};
