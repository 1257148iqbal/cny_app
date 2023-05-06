/*
     Title: merchantWiseOrderValueDistribution Route
     Description: merchantWiseOrderValueDistribution Route
     Author: Iqbal Hossain
     Date: 16-August-2022
     Modified: 16-August-2022
*/

import { lazy } from 'react';

export const merchantWiseOrderValueDistributionRoute = [
  {
    path: '/merchant-wise-order-value-distribution',
    component: lazy(() => import('views/merchandising/merchantWiseOrderValueDistribution/details/MerchantWiseOrderValueDistribution'))
  }
];
