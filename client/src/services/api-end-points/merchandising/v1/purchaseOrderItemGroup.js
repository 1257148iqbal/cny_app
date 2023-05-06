/*
  Title: purchaseOrderItemGroup
  Description: purchaseOrderItemGroup
  Author: Iqbal Hossain
  Date: 21-September-2022
  Modified: 21-September-2022
*/

export const PURCHASE_ORDER_ITEM_GROUP_API = {
  fetch_po_by_so_item_group: id => `/api/reports/supplierOrders/GetItemGroupWisePo/SupplierOrder/${id}`
};
