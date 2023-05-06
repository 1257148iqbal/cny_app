/*
     Title: SixMonthOrderByBuyerDepartment Route
     Description: SixMonthOrderByBuyerDepartment Route
     Author: Iqbal Hossain
     Date: 10-August-2022
     Modified: 10-August-2022
*/

import { lazy } from 'react';

export const sixMonthOrderByBuyerDepartmentRoute = [
  {
    path: '/six-month-order-by-buyer-department',
    component: lazy(() => import('views/merchandising/sixMonthOrderByBuyerDepartment/details/SixMonthOrderByBuyerDepartment'))
  }
];
