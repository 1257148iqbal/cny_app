/*
     Title: masterOrderSummaryByBuyer Route
     Description: masterOrderSummaryByBuyer Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const masterOrderSummaryByBuyerRoute = [
  {
    path: '/master-order-summary-by-buyer',
    component: lazy(() => import('views/merchandising/masterOrderSummaryByBuyer/details/MasterOrderSummaryByBuyer'))
  }
];
