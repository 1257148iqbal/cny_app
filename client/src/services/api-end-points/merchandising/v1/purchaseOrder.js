/*
  Title: PurchaseOrder
  Description: PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

export const PURCHASE_ORDER_API = {
  fetch_all_po_from_supplier_orders: `/api/reports/supplierOrders/GetAllSupplierOrders`,
  fetch_po_by_supplier_orders: id => `/api/reports/supplierOrders/GetPurchaseOrder/SupplierOrder/${id}`,
  // For RDLC Report
  fetch_po_by_supplier_orders_id_rdlc: supplierOrderId => `Reports/Merchandising/${supplierOrderId}/SupplierOrder`
};
