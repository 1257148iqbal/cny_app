/*
     Title: masterOrderSummaryByBuyerPO Route
     Description: masterOrderSummaryByBuyerPO Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const masterOrderSummaryByBuyerPORoute = [
  {
    path: '/master-order-summary-by-buyer-po',
    component: lazy(() => import('views/merchandising/masterOrderSummaryByBuyerPO/details/MasterOrderSummaryByBuyerPO'))
  }
];
