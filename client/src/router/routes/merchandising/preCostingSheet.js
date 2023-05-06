/*
     Title: Style Details Route
     Description: Style Details Route
     Author: Iqbal Hossain
     Date: 04-August-2022
     Modified: 04-August-2022
*/

import { lazy } from 'react';

export const preCostingSheetRoute = [
  {
    path: '/pre-costing-sheet',
    component: lazy(() => import('views/merchandising/preCostingSheet/details/PreCostingSheet'))
  }
];
