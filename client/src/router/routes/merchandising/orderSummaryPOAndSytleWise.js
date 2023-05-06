/*
     Title: OrderSummaryPOAndSytleWise Route
     Description: OrderSummaryPOAndSytleWise Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const orderSummaryPOAndSytleWiseRoute = [
  {
    path: '/order-summary-po-and-style-wise',
    component: lazy(() => import('views/merchandising/orderSummaryPOAndSytleWise/details/OrderSummaryPOAndSytleWise'))
  }
];
