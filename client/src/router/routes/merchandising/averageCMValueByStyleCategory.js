/*
     Title: averageCMValueByStyleCategory Route
     Description: averageCMValueByStyleCategory Route
     Author: Iqbal Hossain
     Date: 21-August-2022
     Modified: 21 -August-2022
*/

import { lazy } from 'react';

export const averageCMValueByStyleCategoryRoute = [
  {
    path: '/average-cm-value-by-style-category',
    component: lazy(() => import('views/merchandising/averageCMValueByStyleCategory/details/AverageCMValueByStyleCategory'))
  }
];
