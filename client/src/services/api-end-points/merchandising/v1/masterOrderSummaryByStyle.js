/*
  Title: masterOrderSummaryByStyle
  Description: masterOrderSummaryByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

export const MASTER_ORDER_SUMMARY_BY_STYLE_API = {
  fetch_order_summary_by_style: ( fromDate, toDate ) => `/api/reports/OrderSummaryByStyles/GetOrderSummaryByStyles/FromDate/${fromDate}/ToDate/${toDate}`
};
