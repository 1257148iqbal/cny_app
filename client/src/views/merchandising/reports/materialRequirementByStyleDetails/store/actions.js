/*
  Title: Actions for MaterialRequirementByStyleDetails
  Description: Actions for MaterialRequirementByStyleDetails
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_MATERIAL_REQUIREMENT_BY_STYLE_DETAILS } from './actionType';

//Get Data by Query
export const fetchMaterialRequirementByStyleDetails = () => async dispatch => {
  const data = {
    id: uuid(),
    buyer: '5 STAR APPARELS INC.',
    poNos: '39001065, 39001068, 39001066, 39001069, 39001067',
    shipmentDate: '15 Oct 21',
    styleDescription: 'MOD POCKET RIB POLO',
    department: 'MENS',
    accHolder: 'SM Sazzad',
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
        color: 'RED',
        poInfos: [
          {
            id: uuid(),
            poNo: 'JS92016',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001066',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 0,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 9600,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001067',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001068',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001069',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 0,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 9600,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001070',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001071',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              }
            ]
          }
        ]
      },
      {
        id: uuid(),
        color: 'NAVY BLAZER',
        poInfos: [
          {
            id: uuid(),
            poNo: 'JS92016',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001066',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 0,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 9600,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001067',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001068',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001069',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 0,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 9600,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001070',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001071',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              }
            ]
          }
        ]
      },
      {
        id: uuid(),
        color: 'SNOW WHITE',
        poInfos: [
          {
            id: uuid(),
            poNo: 'JS92016',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 12800,
                size_L: 19200,
                size_XL: 16000,
                size_XXL: 9600,
                Total: 57600
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001066',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 0,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 2412,
                size_L: 2412,
                size_XL: 1608,
                size_XXL: 9600,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001067',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 804,
                size_L: 2010,
                size_XL: 2412,
                size_XXL: 2010,
                Total: 7236
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001068',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 5200,
                size_L: 7800,
                size_XL: 6500,
                size_XXL: 3900,
                Total: 23400
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001069',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 0,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 326,
                size_M: 978,
                size_L: 978,
                size_XL: 652,
                size_XXL: 9600,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001070',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 0,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 804,
                size_M: 326,
                size_L: 815,
                size_XL: 978,
                size_XXL: 815,
                Total: 2934
              }
            ]
          },
          {
            id: uuid(),
            poNo: '39001071',
            poDetails: [
              {
                id: uuid(),
                qty: 'PO Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              },
              {
                id: uuid(),
                qty: 'Adjusted Qty',
                size_S: 1120,
                size_M: 1760,
                size_L: 2440,
                size_XL: 1760,
                size_XXL: 960,
                Total: 8040
              }
            ]
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
        value: '6,306.15',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Collar & Cuff Collar & Cuff NAVY BLAZER . FLAT KNIT COLLAR & CUFF WITH Y/D TIPPING',
        reqQty: 247447,
        orderUOM: 'pcs',
        value: '2,474.47',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Collar & Cuff Collar & Cuff SNOW WHITE . FLAT KNIT COLLAR & CUFF WITH Y/D TIPPING',
        reqQty: 252252,
        orderUOM: 'pcs',
        value: '13,369.04',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Knit Fabric . 95/5 COTTON SPANDEX . . RED WIDTH 66 INCH GSM 215',
        reqQty: 749544,
        orderUOM: 'pcs',
        value: '6,510.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Knit Fabric . 95/5 COTTON SPANDEX . . NAVY BLAZER WIDTH 66 INCH GSM 215',
        reqQty: 249850,
        orderUOM: 'pcs',
        value: '3,997.55',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Brand label Brand label woven BSS-WMF . . . WOVEN MAIN LABEL',
        reqQty: 18581,
        orderUOM: 'pcs',
        value: '9,430.79',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Button Plastic 18L NAVY BLAZER . SIDE STRIPE 4 HOLE PLASTIC BUTTON',
        reqQty: 37259,
        orderUOM: 'pcs',
        value: '1,217.18',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Button Metalic . . . SNAP BUTTON',
        reqQty: 252253,
        orderUOM: 'pcs',
        value: '136,721.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Care Label Care Label Satin . . . . CARE AND COO LABEL',
        reqQty: 252253,
        orderUOM: 'yds',
        amount: '4,217.33',
        valueer: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 7 PLY L 56 X W 36 X H 28 CM BROWN 7 PLY CARTON WITH GUM PASTING (ONE SIDE VIRGIN ONE SIDE BONDED LINER)',
        reqQty: 245045,
        orderUOM: 'pcs',
        value: '12,252.25',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 3 PLY L 52 X W 30 CM BROWN 3 PLY CARD BOARD',
        reqQty: 245045,
        orderUOM: 'pcs',
        value: '2,450.45',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 7 PLY L 50.5 X W 30.5 X H 30.5 CM BROWN 7 PLY CARTON WITH GUM PASTING (ONE SIDE VIRGIN ONE SIDE BONDED LINER)',
        reqQty: 252253,
        orderUOM: 'yds',
        amount: '542,519.49',
        valueer: ''
      },
      {
        id: uuid(),
        itemName: 'Carton 3 PLY L 45 X W 25 CM BROWN 3 PLY CARD BOARD',
        reqQty: 18582,
        orderUOM: 'pcs',
        value: '3,344.40',
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
        value: '1,156.80',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Brand BSS-WDTKT NAVY BLAZER SIZE-M HANG TAG WITH STRING',
        reqQty: 249847,
        orderUOM: 'pcs',
        value: '3,497.86',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Brand BSS-WDTKT NAVY BLAZER SIZE-XXL HANG TAG WITH STRING',
        reqQty: 63423360,
        orderUOM: 'mtr',
        value: '8,882.72',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Hang Tag Function . . . FIT TAG',
        reqQty: 247449,
        orderUOM: 'pcs',
        value: '8,660.65',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Interlining Fusing T4558SW - 3 80% POLYESTER 20% COTTON . . WHITE CUTTABLE 43 INCH .',
        reqQty: 252253,
        orderUOM: 'yds',
        amount: '16,167.36',
        valueer: ''
      },
      {
        id: uuid(),
        itemName: 'Sticker Sticker Size Strip 220003646X . SIZE-M .',
        reqQty: 252253,
        orderUOM: 'pcs',
        value: '2,017.97',
        supplier: ''
      }
    ]
  };
  dispatch( {
    type: FETCH_MATERIAL_REQUIREMENT_BY_STYLE_DETAILS,
    payload: data
  } );
};
