/*
     Title: style Summary Buyer And Style Wise Route
     Description: style Summary Buyer AndS tyle Wise Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const styleSummaryBuyerAndStyleWiseRoute = [
  {
    path: '/style-summary-buyer-style-wise',
    component: lazy(() => import('views/merchandising/styleSummaryBuyerAndStyleWise/details/StyleSummaryBuyerAndStyleWise'))
  }
];
