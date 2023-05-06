/*
  Title: PurchaseOrderStyleAndItemWise
  Description: PurchaseOrderStyleAndItemWise
  Author: Iqbal Hossain
  Date: 19-September-2022
  Modified: 19-September-2022
*/

export const PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API = {
  fetch_po_style_and_item_wise_by_so_id: id => `/api/reports/supplierOrders/GetStyleWiseItemGroupPo/SupplierOrder/${id}`,
  fetch_po_style_and_po_wise_by_so_id: id => `/api/reports/supplierOrders/GetStyleAndPoWiseItemGroupPo/SupplierOrder/${id}`,
  //For RDLC Report
  fetch_po_style_by_so_id_rdlc: supplierOrderId => `Reports/Merchandising/${supplierOrderId}/PurchaseOrderStyleWise`,
  fetch_po_style_and_po_wise_by_so_id_rdlc: supplierOrderId => `Reports/Merchandising/${supplierOrderId}/PurchaseOrderPOWise`

};
