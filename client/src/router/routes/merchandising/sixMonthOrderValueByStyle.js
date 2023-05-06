/*
     Title: sixMonthOrderValueByStyle Route
     Description: sixMonthOrderValueByStyle Route
     Author: Iqbal Hossain
     Date: 08-August-2022
     Modified: 08-August-2022
*/

import { lazy } from 'react';

export const sixMonthOrderValueByStyleRoute = [
  {
    path: '/six-month-order-value-by-style',
    component: lazy(() => import('views/merchandising/sixMonthOrderValueByStyle/details/SixMonthOrderValueByStyle'))
  }
];
