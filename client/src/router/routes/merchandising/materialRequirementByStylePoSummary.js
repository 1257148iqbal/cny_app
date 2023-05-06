/*
     Title: materialRequirementByStylePoSummary Route
     Description: materialRequirementByStylePoSummary Route
     Author: Iqbal Hossain
     Date: 14-August-2022
     Modified: 14-August-2022
*/

import { lazy } from 'react';

export const materialRequirementByStylePoSummaryRoute = [
  {
    path: '/material-requirement-by-po-summary',
    component: lazy(() => import('views/merchandising/materialRequirementByPoSummary/details/MaterialRequirementByPoSummary'))
  }
];
