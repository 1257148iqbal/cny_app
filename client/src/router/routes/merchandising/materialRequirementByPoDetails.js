/*
     Title: materialRequirementByPoDetails Route
     Description: materialRequirementByPoDetails Route
     Author: Iqbal Hossain
     Date: 17-August-2022
     Modified: 17-August-2022
*/

import { lazy } from 'react';

export const materialRequirementByPoDetailsRoute = [
  {
    path: '/material-requirement-by-po-details',
    component: lazy(() => import('views/merchandising/materialRequirementByPoDetails/details/MaterialRequirementByPoDetails'))
  }
];
