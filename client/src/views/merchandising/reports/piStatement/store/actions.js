/*
  Title: Actions for PurchaseOrder
  Description: Actions for PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

import { baseAxios } from '@services';
import { PI_STATEMENT_API, PURCHASE_ORDER_API } from '@services/api-end-points/merchandising/v1';
import { FETCH_ALL_PO_BY_SO_PI_STATEMENT, FETCH_ALL_SUPPLIER_PI_STATEMENT, FETCH_PURCHASE_ORDER_PI_STATEMENT } from './actionType';

//fetch all po from supplier order
export const fetchAllPosPIStatement = () => async dispatch => {
  const response = await baseAxios.get( `${PURCHASE_ORDER_API.fetch_all_po_from_supplier_orders}` );
  const allPos = response.data.data;
  dispatch( {
    type: FETCH_ALL_PO_BY_SO_PI_STATEMENT,
    payload: allPos
  } );
};

//fetch all supplier pi
export const fetchAllSupplierPI = ( orderId, searchKey ) => async dispatch => {
  let response;
  if ( !searchKey && orderId ) {
    response = await baseAxios.get( `${PI_STATEMENT_API.fetch_all_supplier_pi}`, { params: { orderId } } );
  } else if ( !orderId && searchKey ) {
    response = await baseAxios.get( `${PI_STATEMENT_API.fetch_all_supplier_pi}`, { params: { searchKey } } );
  } else {
    response = await baseAxios.get( PI_STATEMENT_API.fetch_all_supplier_pi );
  }
  const data = response.data.data;
  dispatch( {
    type: FETCH_ALL_SUPPLIER_PI_STATEMENT,
    payload: data
  } );
};

// Get Data by Query
export const fetchSupplierPIDetailsById = id => async dispatch => {
  const response = await baseAxios.get( PI_STATEMENT_API.fetch_supplier_pi_details_by_sp_id( id ) );
  const data = response.data.data;
  dispatch( {
    type: FETCH_PURCHASE_ORDER_PI_STATEMENT,
    payload: data
  } );
};
