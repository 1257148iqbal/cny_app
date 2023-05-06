/*
     Title: materialRequirementByStyle Route
     Description: materialRequirementByStyle Route
     Author: Iqbal Hossain
     Date: 14-August-2022
     Modified: 14-August-2022
*/

import { lazy } from 'react';

export const materialRequirementByStyleRoute = [
  {
    path: '/material-requirement-by-style',
    component: lazy(() => import('views/merchandising/materialRequirementByStyle/details/MaterialRequirementByStyle'))
  }
];
