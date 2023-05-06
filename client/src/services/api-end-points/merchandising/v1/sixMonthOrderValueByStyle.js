/*
  Title: sixMonthOrderValueByStyle
  Description: sixMonthOrderValueByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/

export const SIX_MONTH_ORDER_VALUE_BY_STYLE_API = {
  fetch_order_value_by_styles: ( status, fromDate, toDate ) => `/api/reports/GetOrderValueByStyles/GetSixMonthOrderValueByStyles/Status/${status}/FromDate/${fromDate}/ToDate/${toDate}`
};
