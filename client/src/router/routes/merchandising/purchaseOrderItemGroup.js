/*
  Title: purchaseOrderItemGroup
  Description: purchaseOrderItemGroup
  Author: Iqbal Hossain
  Date: 21-September-2022
  Modified: 21-September-2022
*/

import { lazy } from 'react';

export const purchaseOrderItemGroupRoute = [
  {
    path: '/purchase-order-item-group',
    component: lazy(() => import('views/merchandising/purchaseOrderItemGroup/details/PurchaseOrderItemGroup'))
  }
];
