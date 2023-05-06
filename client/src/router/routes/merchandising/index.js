/*
     Title: Entry file for all routes for  reporting module
     Description: All routes for reporting modue are imported here and from here all files are exported as item of routes array
     Author: Iqbal Hossain
     Date: 04-August-2022
     Modified: 04-August-2022
*/

import { averageCMValueByStyleCategoryRoute } from './averageCMValueByStyleCategory';
import { budgetSheetRoute } from './budgetSheet';
import { exportPoWithColorAndSizeRoute } from './exportPoWithColorAndSize';
import { masterOrderSummaryByBuyerRoute } from './masterOrderSummaryByBuyer';
import { masterOrderSummaryByBuyerPORoute } from './masterOrderSummaryByBuyerPO';
import { masterOrderSummaryByStyleRoute } from './masterOrderSummaryByStyle';
import { materialRequirementByPoDetailsRoute } from './materialRequirementByPoDetails';
import { materialRequirementByStyleRoute } from './materialRequirementByStyle';
import { materialRequirementByStyleDetailsRoute } from './materialRequirementByStyleDetails';
import { materialRequirementByStylePoSummaryRoute } from './materialRequirementByStylePoSummary';
import { materialRequirementItemDetailsRoute } from './materialRequirementItemDetails';
import { materialRequirementItemDetailsPoWiseRoute } from './materialRequirementItemDetailsPoWise';
import { materialStatusStyleAndPoWiseRoute } from './materialStatusStyleAndPoWise';
import { merchantBuyerWiseOrderValueDistributionRoute } from './merchantBuyerWiseOrderValueDistribution';
import { merchantWiseOrderValueDistributionRoute } from './merchantWiseOrderValueDistribution';
import { monthlyOrderSummaryRoute } from './monthlyOrderSummary';
import { orderSummaryPOAndSytleWiseRoute } from './orderSummaryPOAndSytleWise';
import { piStatementRoute } from './piStatement';
import { postCostSheetRoute } from './postCostSheet';
import { preCostingSheetRoute } from './preCostingSheet';
import { purchaseOrderRoute } from './purchaseOrder';
import { purchaseOrderItemGroupRoute } from './purchaseOrderItemGroup';
import { purchaseOrderStyleAndItemWiseRoute } from './purchaseOrderStyleAndItemWise';
import { sampleRequisitionRoute } from './sampleRequisition';
import { sixMonthCMValueByStyleRoute } from './sixMonthCMValueByStyle';
import { sixMonthOrderByBuyerDepartmentRoute } from './sixMonthOrderByBuyerDepartment';
import { sixMonthOrderValueByBuyerRoute } from './sixMonthOrderValueByBuyer';
import { sixMonthOrderValueByStyleRoute } from './sixMonthOrderValueByStyle';
import { styleCategoryWiseOrderValueDistributionRoute } from './styleCategoryWiseOrderValueDistribution';
import { styleDetailsRoute } from './styleDetails';
import { styleSummaryBuyerAndStyleWiseRoute } from './styleSummaryBuyerAndStyleWise';
import { styleSummaryWithPoDetailsRoute } from './styleSummaryWithPoDetails';
import { styleWiseCostingSummaryRoute } from './styleWiseCostingSummary';
import { userWiseRolesRoute } from './userWiseRoles';
import { weeklyShipmentScheduleRoute } from './weeklyShipmentSchedule';
import { weeklyShipmentScheduleNextSevenDaysRoute } from './weeklyShipmentScheduleNextSevenDays';

export const reportingRoutes = [
  ...styleDetailsRoute,
  ...preCostingSheetRoute,
  ...styleSummaryBuyerAndStyleWiseRoute,
  ...styleWiseCostingSummaryRoute,
  ...exportPoWithColorAndSizeRoute,
  ...orderSummaryPOAndSytleWiseRoute,
  ...masterOrderSummaryByBuyerRoute,
  ...masterOrderSummaryByBuyerPORoute,
  ...masterOrderSummaryByStyleRoute,
  ...sixMonthOrderValueByBuyerRoute,
  ...sixMonthOrderValueByStyleRoute,
  ...sixMonthOrderByBuyerDepartmentRoute,
  ...styleSummaryWithPoDetailsRoute,
  ...monthlyOrderSummaryRoute,
  ...materialRequirementByStyleRoute,
  ...materialRequirementByStyleDetailsRoute,
  ...materialRequirementByStylePoSummaryRoute,
  ...styleCategoryWiseOrderValueDistributionRoute,
  ...merchantBuyerWiseOrderValueDistributionRoute,
  ...merchantWiseOrderValueDistributionRoute,
  ...materialRequirementByPoDetailsRoute,
  ...materialRequirementItemDetailsPoWiseRoute,
  ...materialRequirementItemDetailsRoute,
  ...budgetSheetRoute,
  ...weeklyShipmentScheduleRoute,
  ...weeklyShipmentScheduleNextSevenDaysRoute,
  ...sixMonthCMValueByStyleRoute,
  ...averageCMValueByStyleCategoryRoute,
  ...postCostSheetRoute,
  ...sampleRequisitionRoute,
  ...purchaseOrderRoute,
  ...purchaseOrderStyleAndItemWiseRoute,
  ...purchaseOrderItemGroupRoute,
  ...piStatementRoute,
  ...userWiseRolesRoute,
  ...materialStatusStyleAndPoWiseRoute
];
