/*
     Title: StyleSummaryWithPoDetails Route
     Description: StyleSummaryWithPoDetails Route
     Author: Iqbal Hossain
     Date: 10-August-2022
     Modified: 10-August-2022
*/

import { lazy } from 'react';

export const styleSummaryWithPoDetailsRoute = [
  {
    path: '/style-summary-with-po-details',
    component: lazy(() => import('views/merchandising/styleSummaryWithPoDetails/details/StyleSummaryWithPoDetails'))
  }
];
