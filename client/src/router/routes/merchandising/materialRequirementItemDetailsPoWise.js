/*
     Title: materialRequirementItemDetailsPoWise Route
     Description: materialRequirementItemDetailsPoWise Route
     Author: Iqbal Hossain
     Date: 17-August-2022
     Modified: 17-August-2022
*/

import { lazy } from 'react';

export const materialRequirementItemDetailsPoWiseRoute = [
  {
    path: '/material-requirement-item-details-po-wise',
    component: lazy(() => import('views/merchandising/materialRequirementItemDetailsPoWise/details/MaterialRequirementItemDetailsPoWise'))
  }
];
