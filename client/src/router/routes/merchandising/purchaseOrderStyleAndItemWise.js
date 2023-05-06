/*
  Title: PurchaseOrderStyleAndItemWise
  Description: PurchaseOrderStyleAndItemWise
  Author: Iqbal Hossain
  Date: 19-September-2022
  Modified: 19-September-2022
*/

import { lazy } from 'react';

export const purchaseOrderStyleAndItemWiseRoute = [
  {
    path: '/purchase-order-style-and-item-wise',
    component: lazy(() => import('views/merchandising/purchaseOrderStyleAndItemWise/details/PurchaseOrderStyleAndItemWise'))
  }
];
