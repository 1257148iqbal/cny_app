/*
  Title: masterOrderSummaryByBuyerPO
  Description: masterOrderSummaryByBuyerPO
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

export const MASTER_ORDER_SUMMARY_BY_BUYER_PO_API = {
  fetch_order_summary_by_buyer_po: ( fromDate, toDate ) => `/api/reports/OrderSummaryByBuyerPOs/OrderSummaryByBuyerPOs/FromDate/${fromDate}/ToDate/${toDate}`
};
