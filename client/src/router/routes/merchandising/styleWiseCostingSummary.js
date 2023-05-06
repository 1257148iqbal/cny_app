/*
     Title: style Wise Costing Summary Route
     Description: style Wise Costing Summary Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const styleWiseCostingSummaryRoute = [
  {
    path: '/style-wise-costing-summary',
    component: lazy(() => import('views/merchandising/styleWiseCostingSummary/details/StyleWiseCostingSummary'))
  }
];
