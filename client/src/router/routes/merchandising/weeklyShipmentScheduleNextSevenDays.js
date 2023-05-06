/*
     Title: WeeklyShipmentScheduleNextSevenDays Route
     Description: WeeklyShipmentScheduleNextSevenDays Route
     Author: Iqbal Hossain
     Date: 20-August-2022
     Modified: 20-August-2022
*/

import { lazy } from 'react';

export const weeklyShipmentScheduleNextSevenDaysRoute = [
  {
    path: '/weekly-shipment-schedule-next-seven-days',
    component: lazy(() => import('views/merchandising/weeklyShipmentScheduleNextSevenDays/details/WeeklyShipmentScheduleNextSevenDays'))
  }
];
