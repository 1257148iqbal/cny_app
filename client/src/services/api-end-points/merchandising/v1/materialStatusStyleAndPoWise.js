/*
  Title: Materail Status Style and Po Wise
  Description: Materail Status Style and Po Wise
  Author: Iqbal Hossain
  Date: 27-September-2022
  Modified: 27-September-2022
*/

export const MATERIAL_STATUS_STYLE_AND_PO_WISE_API = {
  fetch_material_status_style_po_wise: styleId => `/api/reports/MaterialStatus/GetMaterialStatus/Style/${styleId}`,
  fetch_purchase_orders_by_style_id: styleId => `/api/reports/MaterialStatus/Style/${styleId}/PurchaseOrders`,
  fetch_material_status_style_po_item_details: ( styleId, itemCatetoryId ) => `/api/reports/MaterialStatus/GetMaterialStatus/Style/${styleId}/ItemCategory/${itemCatetoryId}`,

  // For RDLC Report
  fetch_material_status_style_po_wise_rdlc: ( styleId, orderId ) => `Reports/Merchandising/Style/${styleId}/PO/${orderId}/MaterialStatusStyleAndPOWise`
};
