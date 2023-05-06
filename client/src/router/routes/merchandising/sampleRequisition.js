/*
     Title: sampleRequisition Route
     Description: sampleRequisition Route
     Author: Iqbal Hossain
     Date: 20-August-2022
     Modified: 20 -August-2022
*/

import { lazy } from 'react';

export const sampleRequisitionRoute = [
  {
    path: '/sample-requisition',
    component: lazy(() => import('views/merchandising/sampleRequisition/details/SampleRequisition'))
  }
];
