/*
  Title: PI Statement
  Description: PI Statement
  Author: Iqbal Hossain
  Date: 25-September-2022
  Modified: 25-September-2022
*/

import { lazy } from 'react';

export const piStatementRoute = [
  {
    path: '/pi-statement',
    component: lazy(() => import('views/merchandising/piStatement/details/PIStatement'))
  }
];
