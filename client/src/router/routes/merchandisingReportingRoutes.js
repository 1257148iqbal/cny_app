/*
    Title: Entry file for all routes for  reporting module
    Description:  Entry file for all routes for  reporting module
    Author: Iqbal Hossain
    Date: 27-September-2022
    Modified: 27-September-2022
*/
import { lazy } from 'react';

export const merchandisingReportingRoutes = [
  {
    path: '/average-cm-value-by-style-category',
    component: lazy( () => import( '@views/merchandising/reports/averageCMValueByStyleCategory/details/AverageCMValueByStyleCategory' ) )
  },
  {
    path: '/budget-sheet',
    component: lazy( () => import( '@views/merchandising/reports/budgetSheet/details/BudgetSheet' ) )
  },
  {
    path: '/buyer-po-with-color-sizes',
    component: lazy( () => import( '@views/merchandising/reports/exportPoWithColorAndSize/details/ExportPoWithColorAndSize' ) )
  },
  {
    path: '/master-order-summary-by-buyer',
    component: lazy( () => import( '@views/merchandising/reports/masterOrderSummaryByBuyer/details/MasterOrderSummaryByBuyer' ) )
  },
  {
    path: '/master-order-summary-by-buyer-po',
    component: lazy( () => import( '@views/merchandising/reports/masterOrderSummaryByBuyerPO/details/MasterOrderSummaryByBuyerPO' ) )
  },
  {
    path: '/master-order-summary-by-style',
    component: lazy( () => import( '@views/merchandising/reports/masterOrderSummaryByStyle/details/MasterOrderSummaryByStyle' ) )
  },
  {
    path: '/material-requirement-by-po-details',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementByPoDetails/details/MaterialRequirementByPoDetails' ) )
  },
  {
    path: '/material-requirement-by-style',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementByStyle/details/MaterialRequirementByStyle' ) )
  },
  {
    path: '/material-requirement-by-style-details',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementByStyleDetails/details/MaterialRequirementByStyleDetails' ) )
  },
  {
    path: '/material-requirement-by-po-summary',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementByPoSummary/details/MaterialRequirementByPoSummary' ) )
  },
  {
    path: '/material-requirement-item-details',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementItemDetails/details/MaterialRequirementItemDetails' ) )
  },
  {
    path: '/material-requirement-item-details-po-wise',
    component: lazy( () => import( '@views/merchandising/reports/materialRequirementItemDetailsPoWise/details/MaterialRequirementItemDetailsPoWise' ) )
  },
  {
    path: '/material-status-style-and-po-wise',
    component: lazy( () => import( '@views/merchandising/reports/materialStatusStyleAndPoWise/details/MaterialStatusStyleAndPoWise' ) )
  },
  {
    path: '/merchant-buyer-wise-order-value-distribution',
    component: lazy( () => import( '@views/merchandising/reports/merchantBuyerWiseOrderValueDistribution/details/MerchantBuyerWiseOrderValueDistribution' )
    )
  },
  {
    path: '/merchant-wise-order-value-distribution',
    component: lazy( () => import( '@views/merchandising/reports/merchantWiseOrderValueDistribution/details/MerchantWiseOrderValueDistribution' ) )
  },
  {
    path: '/monthly-order-summary',
    component: lazy( () => import( '@views/merchandising/reports/monthlyOrderSummary/details/MonthlyOrderSummary' ) )
  },
  {
    path: '/order-summary-po-and-style-wise',
    component: lazy( () => import( '@views/merchandising/reports/orderSummaryPOAndSytleWise/details/OrderSummaryPOAndSytleWise' ) )
  },
  {
    path: '/pi-statement',
    component: lazy( () => import( '@views/merchandising/reports/piStatement/details/PIStatement' ) )
  },
  {
    path: '/post-cost-sheet',
    component: lazy( () => import( '@views/merchandising/reports/postCostSheet/details/PostCostSheet' ) )
  },
  {
    path: '/pre-costing-sheet',
    component: lazy( () => import( '@views/merchandising/reports/preCostingSheet/details/PreCostingSheet' ) )
  },
  {
    path: '/purchase-order',
    component: lazy( () => import( '@views/merchandising/reports/purchaseOrder/details/PurchaseOrder' ) )
  },
  {
    path: '/purchase-order-item-group',
    component: lazy( () => import( '@views/merchandising/reports/purchaseOrderItemGroup/details/PurchaseOrderItemGroup' ) )
  },
  {
    path: '/purchase-order-style-and-item-wise',
    component: lazy( () => import( '@views/merchandising/reports/purchaseOrderStyleAndItemWise/details/PurchaseOrderStyleAndItemWise' ) )
  },
  {
    path: '/sample-requisition',
    component: lazy( () => import( '@views/merchandising/reports/sampleRequisition/details/SampleRequisition' ) )
  },
  {
    path: '/six-month-cm-value-by-style',
    component: lazy( () => import( '@views/merchandising/reports/sixMonthCMValueByStyle/details/SixMonthCMValueByStyle' ) )
  },
  {
    path: '/six-month-order-by-buyer-department',
    component: lazy( () => import( '@views/merchandising/reports/sixMonthOrderByBuyerDepartment/details/SixMonthOrderByBuyerDepartment' ) )
  },
  {
    path: '/six-month-order-value-by-buyer',
    component: lazy( () => import( '@views/merchandising/reports/sixMonthOrderValueByBuyer/details/SixMonthOrderValueByBuyer' ) )
  },
  {
    path: '/six-month-order-value-by-style',
    component: lazy( () => import( '@views/merchandising/reports/sixMonthOrderValueByStyle/details/SixMonthOrderValueByStyle' ) )
  },
  {
    path: '/style-category-wise-order-value-distribution',
    component: lazy( () => import( '@views/merchandising/reports/styleCategoryWiseOrderValueDistribution/details/StyleCategoryWiseOrderValueDistribution' )
    )
  },
  {
    path: '/style-details',
    component: lazy( () => import( '@views/merchandising/reports/styleDetails/details/StyleDetails' ) )
  },
  {
    path: '/style-summary-buyer-style-wise',
    component: lazy( () => import( '@views/merchandising/reports/styleSummaryBuyerAndStyleWise/details/StyleSummaryBuyerAndStyleWise' ) )
  },
  {
    path: '/style-summary-with-po-details',
    component: lazy( () => import( '@views/merchandising/reports/styleSummaryWithPoDetails/details/StyleSummaryWithPoDetails' ) )
  },
  {
    path: '/style-wise-costing-summary',
    component: lazy( () => import( '@views/merchandising/reports/styleWiseCostingSummary/details/StyleWiseCostingSummary' ) )
  },
  {
    path: '/user-wise-role',
    component: lazy( () => import( '@views/merchandising/reports/userWiseRole/details/UserWiseRole' ) )
  },
  {
    path: '/weekly-shipment-schedule',
    component: lazy( () => import( '@views/merchandising/reports/weeklyShipmentSchedule/details/WeeklyShipmentSchedule' ) )
  },
  {
    path: '/weekly-shipment-schedule-next-seven-days',
    component: lazy( () => import( '@views/merchandising/reports/weeklyShipmentScheduleNextSevenDays/details/WeeklyShipmentScheduleNextSevenDays' ) )
  }
];
