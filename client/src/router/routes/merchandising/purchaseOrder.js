/*
     Title: purchaseOrder Route
     Description: purchaseOrder Route
     Author: Iqbal Hossain
     Date: 22-August-2022
     Modified: 22 -August-2022
*/

import { lazy } from 'react';

export const purchaseOrderRoute = [
  {
    path: '/purchase-order',
    component: lazy(() => import('views/merchandising/purchaseOrder/details/PurchaseOrder'))
  }
];
