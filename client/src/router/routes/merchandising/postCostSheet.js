/*
     Title: postCostSheet Route
     Description: postCostSheet Route
     Author: Iqbal Hossain
     Date: 20-August-2022
     Modified: 20 -August-2022
*/

import { lazy } from 'react';

export const postCostSheetRoute = [
  {
    path: '/post-cost-sheet',
    component: lazy(() => import('views/merchandising/postCostSheet/details/PostCostSheet'))
  }
];
