/*
     Title: style Wise Costing Summary Route
     Description: style Wise Costing Summary Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const materialStatusStyleAndPoWiseRoute = [
  {
    path: '/material-status-style-and-po-wise',
    component: lazy(() => import('views/merchandising/materialStatusStyleAndPoWise/details/MaterialStatusStyleAndPoWise'))
  }
];
