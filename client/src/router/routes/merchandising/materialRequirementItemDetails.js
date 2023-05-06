/*
     Title: materialRequirementItemDetails Route
     Description: materialRequirementItemDetails Route
     Author: Iqbal Hossain
     Date: 18-August-2022
     Modified: 18-August-2022
*/

import { lazy } from 'react';

export const materialRequirementItemDetailsRoute = [
  {
    path: '/material-requirement-item-details',
    component: lazy(() => import('views/merchandising/materialRequirementItemDetails/details/MaterialRequirementItemDetails'))
  }
];
