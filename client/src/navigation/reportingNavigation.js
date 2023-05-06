/*
  Title: Navigation Menu
  Description: Navigation Menu
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/

import { Activity, Aperture, Briefcase, Command, Cpu, Gift, GitCommit, Grid, HardDrive, Map, Share2, Slack } from 'react-feather';

export const reportingNavigation = [
  {
    id: 'reports',
    title: 'Reports',
    icon: <GitCommit size={20} />,
    children: [
      {
        id: 'style',
        title: 'Style',
        icon: <Grid size={20} />,
        children: [
          {
            id: 'style-details',
            title: 'Style Details',
            icon: <Command size={20} />,
            navLink: '/style-details'
          },
          {
            id: 'style-summary-buyer-style-wise',
            title: 'Style Summary Buyer and Style Wise',
            icon: <Activity size={20} />,
            navLink: '/style-summary-buyer-style-wise'
          }
        ]
      },

      {
        id: 'buyer-po',
        title: 'Buyer PO',
        icon: <Slack size={20} />,
        children: [
          {
            id: 'buyer-po-with-color-sizes',
            title: 'Buyer PO With Color and Size',
            icon: <Share2 size={20} />,
            navLink: '/buyer-po-with-color-sizes'
          },
          {
            id: 'order-summary-po-and-style-wise',
            title: 'Order Summary PO & Style Wise',
            icon: <Share2 size={20} />,
            navLink: '/order-summary-po-and-style-wise'
          },
          {
            id: 'master-order-summary-by-buyer',
            title: 'Master Order Summary By Buyer',
            icon: <Share2 size={20} />,
            navLink: '/master-order-summary-by-buyer'
          },
          {
            id: 'master-order-summary-by-buyer-po',
            title: 'Master Order Summary By Buyer PO',
            icon: <Share2 size={20} />,
            navLink: '/master-order-summary-by-buyer-po'
          },
          {
            id: 'master-order-summary-by-style',
            title: 'Master Order Summary By Style',
            icon: <Share2 size={20} />,
            navLink: '/master-order-summary-by-style'
          },
          {
            id: 'six-month-order-value-by-buyer',
            title: 'Six Month Order Value By Buyer',
            icon: <Share2 size={20} />,
            navLink: '/six-month-order-value-by-buyer'
          },
          {
            id: 'six-month-order-value-by-style',
            title: 'Six Month Order Value By Style',
            icon: <Share2 size={20} />,
            navLink: '/six-month-order-value-by-style'
          },
          {
            id: 'six-month-order-by-buyer-department',
            title: 'Six Month Order By Buyer Department',
            icon: <Share2 size={20} />,
            navLink: '/six-month-order-by-buyer-department'
          },
          {
            id: 'style-category-wise-order-value-distribution',
            title: 'Style Category Wise Distribution',
            icon: <Share2 size={20} />,
            navLink: '/style-category-wise-order-value-distribution'
          },
          {
            id: 'merchant-buyer-wise-order-value-distribution',
            title: 'Merchant And Buyer Wise Distribution',
            icon: <Share2 size={20} />,
            navLink: '/merchant-buyer-wise-order-value-distribution'
          },
          {
            id: 'merchant-wise-order-value-distribution',
            title: 'Merchant Wise Order Value Distribution',
            icon: <Share2 size={20} />,
            navLink: '/merchant-wise-order-value-distribution'
          },
          {
            id: 'monthly-order-summary',
            title: 'Monthly Order Summary',
            icon: <Share2 size={20} />,
            navLink: '/monthly-order-summary'
          },
          {
            id: 'style-summary-with-po-details',
            title: 'Style Summary With Po Details',
            icon: <Share2 size={20} />,
            navLink: '/style-summary-with-po-details'
          }
        ]
      },

      {
        id: 'costing',
        title: 'Costing',
        icon: <Aperture size={20} />,
        children: [
          {
            id: 'pre-costing-sheet',
            title: 'Costing Sheet',
            icon: <Gift size={20} />,
            navLink: '/pre-costing-sheet'
          },
          {
            id: 'style-wise-costing-summary',
            title: 'Style Wise Costing Summary',
            icon: <Gift size={20} />,
            navLink: '/style-wise-costing-summary'
          },
          {
            id: 'post-cost-sheet',
            title: 'Post Cost Sheet',
            icon: <Share2 size={20} />,
            navLink: '/post-cost-sheet'
          }
        ]
      },

      {
        id: 'material-details',
        title: 'Material Details',
        icon: <Cpu size={20} />,
        children: [
          {
            id: 'material-requirement-by-style',
            title: 'Material Requirement By Style Summary',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-by-style'
          },
          {
            id: 'material-requirement-by-style-details',
            title: 'Material Requirement By Style Details',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-by-style-details'
          },
          {
            id: 'material-requirement-by-po-summary',
            title: 'Material Requirement By PO Summary',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-by-po-summary'
          },
          {
            id: 'material-requirement-by-po-details',
            title: 'Material Requirement By PO Details',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-by-po-details'
          },
          {
            id: 'material-requirement-item-details-po-wise',
            title: 'Material Item Details Po Wise',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-item-details-po-wise'
          },
          {
            id: 'material-requirement-item-details',
            title: 'Material Requirement Item Details',
            icon: <Share2 size={20} />,
            navLink: '/material-requirement-item-details'
          },
          {
            id: 'material-status-style-and-po-wise',
            title: 'Material Status Style and Po ',
            icon: <Share2 size={20} />,
            navLink: '/material-status-style-and-po-wise'
          }
        ]
      },

      {
        id: 'budget',
        title: 'Budget',
        icon: <Briefcase size={20} />,
        children: [
          {
            id: 'budget-sheet',
            title: 'Budget Sheet',
            icon: <Share2 size={20} />,
            navLink: '/budget-sheet'
          }
        ]
      },

      // {
      //   id: 'sampleTracking',
      //   title: 'Sample Tracking',
      //   icon: <Slack size={20} />,
      //   children: [
      //     {
      //       id: 'sample-requisition',
      //       title: 'Sample Requisition',
      //       icon: <Share2 size={20} />,
      //       navLink: '/sample-requisition'
      //     }
      //   ]
      // },

      {
        id: 'procurement-and-PI',
        title: 'Procurement And PI',
        icon: <Map size={20} />,
        children: [
          {
            id: 'purchase-order',
            title: 'Purchase Order',
            icon: <Share2 size={20} />,
            navLink: '/purchase-order'
          },
          {
            id: 'purchase-order-style-and-item-wise',
            title: 'Purchase Order Style & Item Wise',
            icon: <Share2 size={20} />,
            navLink: '/purchase-order-style-and-item-wise'
          },
          {
            id: 'purchase-order-item-group',
            title: 'Purchase Order Item Group',
            icon: <Share2 size={20} />,
            navLink: '/purchase-order-item-group'
          },
          {
            id: 'pi-statement',
            title: 'PI Statement',
            icon: <Share2 size={20} />,
            navLink: '/pi-statement'
          }
        ]
      },

      {
        id: 'others',
        title: 'Others',
        icon: <HardDrive size={20} />,
        children: [
          {
            id: 'weekly-shipment-schedule',
            title: 'Weekly Shipment Schedule',
            icon: <Share2 size={20} />,
            navLink: '/weekly-shipment-schedule'
          },
          {
            id: 'weekly-shipment-schedule-next-seven-days',
            title: 'Weekly Shipment Schedule Next 7 Days',
            icon: <Share2 size={20} />,
            navLink: '/weekly-shipment-schedule-next-seven-days'
          },
          {
            id: 'six-month-cm-value-by-style',
            title: 'Six Month CM Value By Style',
            icon: <Share2 size={20} />,
            navLink: '/six-month-cm-value-by-style'
          },
          {
            id: 'average-cm-value-by-style-category',
            title: 'Average CM Value By Style Category',
            icon: <Share2 size={20} />,
            navLink: '/average-cm-value-by-style-category'
          }
        ]
      },
      {
        id: 'accounts',
        title: 'Accounts',
        icon: <HardDrive size={20} />,
        children: [
          {
            id: 'user-wise-role',
            title: 'User Wise Role',
            icon: <Share2 size={20} />,
            navLink: '/user-wise-role'
          }
        ]
      }
    ]
  }
];
