/*
  Title: Actions for StyleSummaryBuyerAndStyleWise
  Description: Actions for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/

import { baseAxios } from '@services';
import { MATERIAL_STATUS_STYLE_AND_PO_WISE_API, STYLES_DETAILS_API } from '@services/api-end-points/merchandising/v1';
import {
  FETCH_BUYER_MATERIAL_STATUS_STYLE_AND_PO_WISE,
  FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_ITEM_DETAILS,
  FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_WISE,
  FETCH_PURCHASE_ORDER_BY_STYLE_ID_MATERIAL_STATUS,
  FETCH_STYLE_MATERIAL_STATUS_STYLE_AND_PO_WISE
} from './actionType';

//fetch all buyer from style
export const fetchAllBuyersMaterialStatus = () => async dispatch => {
  const response = await baseAxios.get( `${STYLES_DETAILS_API.fetch_All_Buyer}` );
  const allBuyers = response.data.data;
  dispatch( {
    type: FETCH_BUYER_MATERIAL_STATUS_STYLE_AND_PO_WISE,
    payload: allBuyers
  } );
};

//fetch season by buyerId
export const fetchStyleByBuyerMaterialStatus = buyerId => async dispatch => {
  const response = await baseAxios.get( STYLES_DETAILS_API.fetch_style_by_buyer( buyerId ) );
  const styles = response.data.data;
  dispatch( {
    type: FETCH_STYLE_MATERIAL_STATUS_STYLE_AND_PO_WISE,
    payload: { styles, isStyleLoading: !!styles?.length }
  } );
};

//fetch PO By Style ID
export const fetchPurchaseOrdersByStyleMaterialStatus = styleId => async dispatch => {
  const response = await baseAxios.get( MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_purchase_orders_by_style_id( styleId ) );
  const pos = response.data.data;
  dispatch( {
    type: FETCH_PURCHASE_ORDER_BY_STYLE_ID_MATERIAL_STATUS,
    payload: { pos, isPosLoading: !!pos?.length }
  } );
};

//Get Data by Query
export const fetchMaterialStatusStyleAndPoWise = ( styleId, orderIds ) => async dispatch => {
  let response = {};
  if ( orderIds ) {
    response = await baseAxios.get( `${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_wise( styleId )}`, { params: { orderIds } } );
  } else {
    response = await baseAxios.get( `${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_wise( styleId )}` );
  }
  const data = response.data.data;
  dispatch( {
    type: FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_WISE,
    payload: { data, isLoadingMaterialStatus: !!data?.length }
  } );
};


//Get Data by Query
export const fetchMaterialStatusStyleAndPoItemDetails = ( styleId, itemCategoryId, index, orderId ) => async dispatch => {
  let response = {};
  if ( orderId ) {
    response = await baseAxios.get( `${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_item_details( styleId, itemCategoryId )}`, { params: { orderId } } );
  } else {
    response = await baseAxios.get( `${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_item_details( styleId, itemCategoryId )}` );
  }
  const data = response.data.data;
  dispatch( {
    type: FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_ITEM_DETAILS,
    payload: {
      index,
      data
    }
  } );
};
