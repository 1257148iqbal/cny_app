/*
     Title: materialRequirementByStyleDetails Route
     Description: materialRequirementByStyleDetails Route
     Author: Iqbal Hossain
     Date: 14-August-2022
     Modified: 14-August-2022
*/

import { lazy } from 'react';

export const materialRequirementByStyleDetailsRoute = [
  {
    path: '/material-requirement-by-style-details',
    component: lazy(() => import('views/merchandising/materialRequirementByStyleDetails/details/MaterialRequirementByStyleDetails'))
  }
];
