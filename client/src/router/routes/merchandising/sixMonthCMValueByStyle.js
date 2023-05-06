/*
     Title: sixMonthCMValueByStyle Route
     Description: sixMonthCMValueByStyle Route
     Author: Iqbal Hossain
     Date: 20-August-2022
     Modified: 20 -August-2022
*/

import { lazy } from 'react';

export const sixMonthCMValueByStyleRoute = [
  {
    path: '/six-month-cm-value-by-style',
    component: lazy(() => import('views/merchandising/sixMonthCMValueByStyle/details/SixMonthCMValueByStyle'))
  }
];
