/*
     Title: budgetSheet Route
     Description: budgetSheet Route
     Author: Iqbal Hossain
     Date: 18-August-2022
     Modified: 18-August-2022
*/

import { lazy } from 'react';

export const budgetSheetRoute = [
  {
    path: '/budget-sheet',
    component: lazy(() => import('views/merchandising/budgetSheet/details/BudgetSheet'))
  }
];
