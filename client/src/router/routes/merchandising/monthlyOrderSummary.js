/*
     Title: MonthlyOrderSummary Route
     Description: MonthlyOrderSummary Route
     Author: Iqbal Hossain
     Date: 10-August-2022
     Modified: 10-August-2022
*/

import { lazy } from 'react';

export const monthlyOrderSummaryRoute = [
  {
    path: '/monthly-order-summary',
    component: lazy(() => import('views/merchandising/monthlyOrderSummary/details/MonthlyOrderSummary'))
  }
];
