/*
     Title: sixMonthOrderValueByBuyer Route
     Description: sixMonthOrderValueByBuyer Route
     Author: Iqbal Hossain
     Date: 08-August-2022
     Modified: 08-August-2022
*/

import { lazy } from 'react';

export const sixMonthOrderValueByBuyerRoute = [
  {
    path: '/six-month-order-value-by-buyer',
    component: lazy(() => import('views/merchandising/sixMonthOrderValueByBuyer/details/SixMonthOrderValueByBuyer'))
  }
];
