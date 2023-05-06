/*
     Title: merchantBuyerWiseOrderValueDistribution Route
     Description: merchantBuyerWiseOrderValueDistribution Route
     Author: Iqbal Hossain
     Date: 16-August-2022
     Modified: 16-August-2022
*/

import { lazy } from 'react';

export const merchantBuyerWiseOrderValueDistributionRoute = [
  {
    path: '/merchant-buyer-wise-order-value-distribution',
    component: lazy(() => import('views/merchandising/merchantBuyerWiseOrderValueDistribution/details/MerchantBuyerWiseOrderValueDistribution'))
  }
];
