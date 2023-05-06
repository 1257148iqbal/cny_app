/*
  Title: masterOrderSummaryByBuyer
  Description: masterOrderSummaryByBuyer
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

export const MASTER_ORDER_SUMMARY_BY_BUYER_API = {
  fetch_order_summary_by_buyers: ( fromDate, toDate ) => `/api/reports/OrderSummaryByBuyers/GetOrderSummaryByBuyers/FromDate/${fromDate}/ToDate/${toDate}`
};
