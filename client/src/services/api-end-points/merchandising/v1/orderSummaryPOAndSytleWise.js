/*
  Title: OrderSummaryPOAndSytleWise
  Description: OrderSummaryPOAndSytleWise
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

export const ORDER_SUMMARY_PO_AND_STYLE_WISE_API = {
  fetch_order_summary_po_and_style_wise: styleId => `/api/reports/OrderSummaryPoAndStyles/GetOrderSummaryWithPO/Style/${styleId}`
};
