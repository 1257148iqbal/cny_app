/*
     Title: masterOrderSummaryByStyle Route
     Description: masterOrderSummaryByStyle Route
     Author: Iqbal Hossain
     Date: 08-August-2022
     Modified: 08-August-2022
*/

import { lazy } from 'react';

export const masterOrderSummaryByStyleRoute = [
  {
    path: '/master-order-summary-by-style',
    component: lazy(() => import('views/merchandising/masterOrderSummaryByStyle/details/MasterOrderSummaryByStyle'))
  }
];
