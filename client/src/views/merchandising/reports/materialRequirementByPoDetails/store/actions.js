/*
  Title: Actions for MaterialRequirementByPoDetails
  Description: Actions for MaterialRequirementByPoDetails
  Author: Iqbal Hossain
  Date: 17-August-2022
  Modified: 17-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_MATERIAL_REQUIREMENT_BY_PO_DETAILS } from './actionType';

//Get Data by Query
export const fetchMaterialRequirementByPoDetails = () => async dispatch => {
  const data = {
    id: uuid(),
    buyer: '5 STAR APPARELS INC.',
    poNos: '39001065',
    shipmentDate: '15 Oct 21',
    styleDescription: 'MOD POCKET RIB POLO',
    department: 'MENS',
    merchantName: 'Zobaidul Alam Chowdhury',
    styleNo: 'BS12SK003C',
    orderQty: '240240 Pcs',
    orderValue: '1,037,836.80',
    year: '2021',
    season: 'SPRING-22',
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    colorSizesInfos: [
      {
        id: uuid(),
        poNo: 'JS92016',
        styleName: '26SEP1368-142',
        color: 'NAVY',
        poDetails: [
          {
            id: uuid(),
            qty: 'PO Qty',
            size_M: 42,
            size_L: 84,
            size_XL: 84,
            size_XXL: 42,
            Total: 1008
          },
          {
            id: uuid(),
            qty: 'Adjusted Qty',
            size_M: 42,
            size_L: 84,
            size_XL: 84,
            size_XXL: 42,
            Total: 1008
          }
        ]
      }
    ],
    materialInfos: [
      {
        id: uuid(),
        itemName: 'Collar & Cuff Collar & Cuff RED . FLAT KNIT COLLAR & CUFF WITH Y/D TIPPING',
        reqQty: 252252,
        orderUOM: 'pcs',
        value: '6306.15',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Collar & Cuff Collar & Cuff NAVY BLAZER . FLAT KNIT COLLAR & CUFF WITH Y/D TIPPING',
        reqQty: 247447,
        orderUOM: 'pcs',
        value: '2474.47',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Collar & Cuff Collar & Cuff SNOW WHITE . FLAT KNIT COLLAR & CUFF WITH Y/D TIPPING',
        reqQty: 252252,
        orderUOM: 'pcs',
        value: '13369.04',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Knit Fabric . 95/5 COTTON SPANDEX . . RED WIDTH 66 INCH GSM 215',
        reqQty: 749544,
        orderUOM: 'pcs',
        value: '6510.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Knit Fabric . 95/5 COTTON SPANDEX . . NAVY BLAZER WIDTH 66 INCH GSM 215',
        reqQty: 249850,
        orderUOM: 'pcs',
        value: '3997.55',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Brand label Brand label woven BSS-WMF . . . WOVEN MAIN LABEL',
        reqQty: 18581,
        orderUOM: 'pcs',
        value: '9430.79',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Button Plastic 18L NAVY BLAZER . SIDE STRIPE 4 HOLE PLASTIC BUTTON',
        reqQty: 37259,
        orderUOM: 'pcs',
        value: '1217.18',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Button Metalic . . . SNAP BUTTON',
        reqQty: 252253,
        orderUOM: 'pcs',
        value: '136721.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Care Label Care Label Satin . . . . CARE AND COO LABEL',
        reqQty: 252253,
        orderUOM: 'yds',
        amount: '4,217.33',
        value: '136721.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 7 PLY L 56 X W 36 X H 28 CM BROWN 7 PLY CARTON WITH GUM PASTING (ONE SIDE VIRGIN ONE SIDE BONDED LINER)',
        reqQty: 245045,
        orderUOM: 'pcs',
        value: '12252.25',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 3 PLY L 52 X W 30 CM BROWN 3 PLY CARD BOARD',
        reqQty: 245045,
        orderUOM: 'pcs',
        value: '2450.45',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 7 PLY L 50.5 X W 30.5 X H 30.5 CM BROWN 7 PLY CARTON WITH GUM PASTING (ONE SIDE VIRGIN ONE SIDE BONDED LINER)',
        reqQty: 252253,
        orderUOM: 'yds',
        amount: '542,519.49',
        value: '2450.45',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 3 PLY L 45 X W 25 CM BROWN 3 PLY CARD BOARD',
        reqQty: 18582,
        orderUOM: 'pcs',
        value: '3344.40',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: '902 Pcs 36.12 CORD STOPPER BRAND STRING NAVY . 078- A - Loop Lock',
        reqQty: 15341,
        orderUOM: 'pcs',
        value: '345.33',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Brand BSS-WDTKT RED SIZE-L HANG TAG WITH STRING',
        reqQty: 11484,
        orderUOM: 'pcs',
        value: '1156.80',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Brand BSS-WDTKT NAVY BLAZER SIZE-M HANG TAG WITH STRING',
        reqQty: 249847,
        orderUOM: 'pcs',
        value: '3497.86',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Brand BSS-WDTKT NAVY BLAZER SIZE-XXL HANG TAG WITH STRING',
        reqQty: 63423360,
        orderUOM: 'mtr',
        value: '8882.72',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Function . . . FIT TAG',
        reqQty: 247449,
        orderUOM: 'pcs',
        value: '8660.65',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Interlining Fusing T4558SW - 3 80% POLYESTER 20% COTTON . . WHITE CUTTABLE 43 INCH .',
        reqQty: 252253,
        orderUOM: 'yds',
        value: '8660.65',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Sticker Sticker Size Strip 220003646X . SIZE-M .',
        reqQty: 252253,
        orderUOM: 'pcs',
        value: '2017.97',
        supplier: ''
      }
    ]
  };
  dispatch( {
    type: FETCH_MATERIAL_REQUIREMENT_BY_PO_DETAILS,
    payload: data
  } );
};
