/*
  Title: User Wise Roles
  Description: User Wise Roles
  Author: Iqbal Hossain
  Date: 25-September-2022
  Modified: 25-September-2022
*/

import { lazy } from 'react';

export const userWiseRolesRoute = [
  {
    path: '/user-wise-role',
    component: lazy(() => import('views/merchandising/userWiseRole/details/UserWiseRole'))
  }
];
