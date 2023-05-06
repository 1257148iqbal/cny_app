/*
     Title: WeeklyShipmentSchedule Route
     Description: WeeklyShipmentSchedule Route
     Author: Iqbal Hossain
     Date: 20-August-2022
     Modified: 20-August-2022
*/

import { lazy } from 'react';

export const weeklyShipmentScheduleRoute = [
  {
    path: '/weekly-shipment-schedule',
    component: lazy(() => import('views/merchandising/weeklyShipmentSchedule/details/WeeklyShipmentSchedule'))
  }
];
