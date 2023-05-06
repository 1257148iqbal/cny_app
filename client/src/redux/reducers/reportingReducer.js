import { budgetSheetReducer } from '@views/merchandising/reports//budgetSheet/store/reducers';
import { averageCMValueByStyleCategoryReducer } from '@views/merchandising/reports/averageCMValueByStyleCategory/store/reducers';
import { exprotPoWithColorAndSizeReducer } from '@views/merchandising/reports/exportPoWithColorAndSize/store/reducers';
import { masterOrderSummaryByBuyerReducer } from '@views/merchandising/reports/masterOrderSummaryByBuyer/store/reducers';
import { masterOrderSummaryByBuyerPOReducer } from '@views/merchandising/reports/masterOrderSummaryByBuyerPO/store/reducers';
import { masterOrderSummaryByStyleReducer } from '@views/merchandising/reports/masterOrderSummaryByStyle/store/reducers';
import { materialRequirementByPoDetailsReducer } from '@views/merchandising/reports/materialRequirementByPoDetails/store/reducers';
import { materialRequirementByPoSummaryReducer } from '@views/merchandising/reports/materialRequirementByPoSummary/store/reducers';
import { materialRequirementByStyleReducer } from '@views/merchandising/reports/materialRequirementByStyle/store/reducers';
import { materialRequirementByStyleDetailsReducer } from '@views/merchandising/reports/materialRequirementByStyleDetails/store/reducers';
import { materialRequirementItemDetailsReducer } from '@views/merchandising/reports/materialRequirementItemDetails/store/reducers';
import { materialRequirementItemDetailsPoWiseReducer } from '@views/merchandising/reports/materialRequirementItemDetailsPoWise/store/reducers';
import { materialStatusStyleAndPOWiseReducer } from '@views/merchandising/reports/materialStatusStyleAndPoWise/store/reducers';
import { merchantBuyerWiseOrderValueDistributionReducer } from '@views/merchandising/reports/merchantBuyerWiseOrderValueDistribution/store/reducers';
import { merchantWiseOrderValueDistributionReducer } from '@views/merchandising/reports/merchantWiseOrderValueDistribution/store/reducers';
import { monthlyOrderSummaryReducer } from '@views/merchandising/reports/monthlyOrderSummary/store/reducers';
import { orderSummaryPOAndSytleWiseReducer } from '@views/merchandising/reports/orderSummaryPOAndSytleWise/store/reducers';
import { piStatementReducer } from '@views/merchandising/reports/piStatement/store/reducers';
import { postCostSheetReducer } from '@views/merchandising/reports/postCostSheet/store/reducers';
import { preCostingSheetReducer } from '@views/merchandising/reports/preCostingSheet/store/reducers';
import { purchaseOrderReducer } from '@views/merchandising/reports/purchaseOrder/store/reducers';
import { purchaseOrderItemGroupReducer } from '@views/merchandising/reports/purchaseOrderItemGroup/store/reducers';
import { purchaseOrderStyleAndItemWiseReducer } from '@views/merchandising/reports/purchaseOrderStyleAndItemWise/store/reducers';
import { sampleRequisitionReducer } from '@views/merchandising/reports/sampleRequisition/store/reducers';
import { sixMonthCMValueByStyleReducer } from '@views/merchandising/reports/sixMonthCMValueByStyle/store/reducers';
import { sixMonthOrderByBuyerDepartmentReducer } from '@views/merchandising/reports/sixMonthOrderByBuyerDepartment/store/reducers';
import { sixMonthOrderValueByBuyerReducer } from '@views/merchandising/reports/sixMonthOrderValueByBuyer/store/reducers';
import { sixMonthOrderValueByStyleReducer } from '@views/merchandising/reports/sixMonthOrderValueByStyle/store/reducers';
import { styleCategoryWiseOrderValueDistributionReducer } from '@views/merchandising/reports/styleCategoryWiseOrderValueDistribution/store/reducers';
import { styleDetailsReducer } from '@views/merchandising/reports/styleDetails/store/reducers';
import { styleSummaryBuyerAndStyleWiseReducer } from '@views/merchandising/reports/styleSummaryBuyerAndStyleWise/store/reducers';
import { styleSummaryWithPoDetailsReducer } from '@views/merchandising/reports/styleSummaryWithPoDetails/store/reducers';
import { styleWiseCostingSummaryReducer } from '@views/merchandising/reports/styleWiseCostingSummary/store/reducers';
import { userWiseRolesReducer } from '@views/merchandising/reports/userWiseRole/store/reducers';
import { weeklyShipmentScheduleReducer } from '@views/merchandising/reports/weeklyShipmentSchedule/store/reducers';
import { weeklyShipmentScheduleNextSevenDaysReducer } from '@views/merchandising/reports/weeklyShipmentScheduleNextSevenDays/store/reducers';

export const reportingReducers = {
  styleDetailsReducer,
  preCostingSheetReducer,
  styleSummaryBuyerAndStyleWiseReducer,
  styleWiseCostingSummaryReducer,
  exprotPoWithColorAndSizeReducer,
  orderSummaryPOAndSytleWiseReducer,
  masterOrderSummaryByBuyerReducer,
  masterOrderSummaryByBuyerPOReducer,
  masterOrderSummaryByStyleReducer,
  sixMonthOrderValueByBuyerReducer,
  sixMonthOrderValueByStyleReducer,
  sixMonthOrderByBuyerDepartmentReducer,
  styleSummaryWithPoDetailsReducer,
  monthlyOrderSummaryReducer,
  materialRequirementByStyleReducer,
  materialRequirementByStyleDetailsReducer,
  materialRequirementByPoSummaryReducer,
  styleCategoryWiseOrderValueDistributionReducer,
  merchantBuyerWiseOrderValueDistributionReducer,
  merchantWiseOrderValueDistributionReducer,
  materialRequirementByPoDetailsReducer,
  materialRequirementItemDetailsPoWiseReducer,
  materialRequirementItemDetailsReducer,
  budgetSheetReducer,
  weeklyShipmentScheduleReducer,
  weeklyShipmentScheduleNextSevenDaysReducer,
  sixMonthCMValueByStyleReducer,
  averageCMValueByStyleCategoryReducer,
  postCostSheetReducer,
  sampleRequisitionReducer,
  purchaseOrderReducer,
  purchaseOrderStyleAndItemWiseReducer,
  purchaseOrderItemGroupReducer,
  piStatementReducer,
  userWiseRolesReducer,
  materialStatusStyleAndPOWiseReducer
};
