/*
  Title: sixMonthOrderValueByBuyer
  Description: sixMonthOrderValueByBuyer
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

export const SIX_MONTH_ORDER_VALUE_BY_BUYER_API = {
  fetch_all_status_from_po: `/api/reports/OrderValueByBuyers/GetAllStatusFromPo`,
  fetch_order_value_by_buyers: ( status, fromDate, toDate ) => `/api/reports/OrderValueByBuyers/GetOrderValueByBuyers/Status/${status}/FromDate/${fromDate}/ToDate/${toDate}`
};
