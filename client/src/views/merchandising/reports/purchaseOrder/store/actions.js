/*
  Title: Actions for PurchaseOrder
  Description: Actions for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

import { baseAxios } from '@services';
import { PURCHASE_ORDER_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_ALL_PO_BY_SUPPLIER_ORDER, FETCH_BUYER_PURCHASE_ORDER, FETCH_PURCHASE_ORDER, FETCH_STYLE_PURCHASE_ORDER } from './actionType';

//fetch all buyer from style
export const fetchAllBuyersPurchaseOrder = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const allBuyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_PURCHASE_ORDER,
    payload: allBuyers
  } );
};

//fetch season by buyerId
export const fetchStyleByBuyerPurchaseOrder = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer( buyerId ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_PURCHASE_ORDER,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//fetch all po buyer from style
export const fetchAllPOByStyleId = ( styleId, searchKey ) => async dispatch => {
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
      type: FETCH_ALL_PO_BY_SUPPLIER_ORDER,
      payload: { data, isPoLoading: !!data?.length }
    } );
  }
};

//Get Data by Query
export const fetchPurchaseOrder = id => async dispatch => {
  const response = await baseAxios.get( PURCHASE_ORDER_API.fetch_po_by_supplier_orders( id ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_PURCHASE_ORDER,
    payload: data
  } );
};
