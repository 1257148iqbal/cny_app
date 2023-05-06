/*
     Title: ExportPoWithColorAndSize Route
     Description: ExportPoWithColorAndSize Route
     Author: Iqbal Hossain
     Date: 06-August-2022
     Modified: 06-August-2022
*/

import { lazy } from 'react';

export const exportPoWithColorAndSizeRoute = [
  {
    path: '/buyer-po-with-color-sizes',
    component: lazy(() => import('views/merchandising/exportPoWithColorAndSize/details/ExportPoWithColorAndSize'))
  }
];
