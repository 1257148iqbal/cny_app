/*
     Title: styleCategoryWiseOrderValueDistribution Route
     Description: styleCategoryWiseOrderValueDistribution Route
     Author: Iqbal Hossain
     Date: 14-August-2022
     Modified: 14-August-2022
*/

import { lazy } from 'react';

export const styleCategoryWiseOrderValueDistributionRoute = [
  {
    path: '/style-category-wise-order-value-distribution',
    component: lazy(() => import('views/merchandising/styleCategoryWiseOrderValueDistribution/details/StyleCategoryWiseOrderValueDistribution'))
  }
];
