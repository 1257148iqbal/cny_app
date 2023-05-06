/*
     Title: Style Details Route
     Description: Style Details Route
     Author: Iqbal Hossain
     Date: 04-August-2022
     Modified: 04-August-2022
*/

import { lazy } from 'react';

export const styleDetailsRoute = [
  {
    path: '/style-details',
    component: lazy(() => import('views/merchandising/styleDetails/details/StyleDetails'))
  }
];
