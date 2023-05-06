/*
  Title: Actions for MaterialRequirementByStyle
  Description: Actions for MaterialRequirementByStyle
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_MATERIAL_REQUIREMENT_BY_STYLE } from './actionType';

//Get Data by Query
export const fetchMaterialRequirementByStyle = () => async dispatch => {
  const data = {
    id: uuid(),
    buyer: '5 STAR APPARELS INC.',
    poNos: '39001065, 39001068, 39001066, 39001069, 39001067',
    shipmentDate: '15 Oct 21',
    styleDescription: 'MOD POCKET RIB POLO',
    department: 'MENS',
    accHolder: 'SM Sazzad',
    styleNo: 'BS12SK003C',
    merchandiser: 'SM Sazzad',
    orderQty: '240240 Pcs',
    orderValue: '1,037,836.80',
    year: '2021',
    season: 'SPRING-22',
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    colorSizesInfos: [
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
        itemName: 'Brand label woven',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 5,
        reqQty: 252252,
        orderUOM: 'pcs',
        amount: '6,306.15',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'BRAND STRING',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 3,
        reqQty: 247447,
        orderUOM: 'pcs',
        amount: '2,474.47',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Metalic',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 5,
        reqQty: 252252,
        orderUOM: 'pcs',
        amount: '13,369.04',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Button Plastic',
        consumption: '3.00 Pcs For 1 Pcs',
        maxWst: 4,
        reqQty: 749544,
        orderUOM: 'pcs',
        amount: '6,510.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Care Label Satin',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 4,
        reqQty: 249850,
        orderUOM: 'pcs',
        amount: '3,997.55',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton',
        consumption: '1.00 Pcs For 40 Pcs',
        maxWst: 2,
        reqQty: 18581,
        orderUOM: 'pcs',
        amount: '9,430.79',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Carton Sticker',
        consumption: '1.00 Pcs For 40 Pcs',
        maxWst: 2,
        reqQty: 37259,
        orderUOM: 'pcs',
        amount: '1,217.18',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Collar & Cuff',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 5,
        reqQty: 252253,
        orderUOM: 'pcs',
        amount: '136,721.00',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Fusing',
        consumption: '.01 yds For 1 Pcs',
        maxWst: 5,
        reqQty: 9839,
        orderUOM: 'yds',
        amount: '4,217.33',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Brand',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 2,
        reqQty: 245045,
        orderUOM: 'pcs',
        amount: '12,252.25',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Hang Tag Function',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 2,
        reqQty: 245045,
        orderUOM: 'pcs',
        amount: '2,450.45',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Knit Fabric',
        consumption: '.76 yds For 1 Pcs',
        maxWst: 5,
        reqQty: 191711,
        orderUOM: 'yds',
        amount: '542,519.49',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'PE SHEETS',
        consumption: '3.00 Pcs For 34 Pcs',
        maxWst: 2,
        reqQty: 18582,
        orderUOM: 'pcs',
        amount: '3,344.40',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Poly Bag Adhesive',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 2,
        reqQty: 15341,
        orderUOM: 'pcs',
        amount: '345.33',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Poly Bag Blister',
        consumption: '1.00 Pcs For 40 Pcs',
        maxWst: 2,
        reqQty: 11484,
        orderUOM: 'pcs',
        amount: '1,156.80',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Poly Sticker',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 5,
        reqQty: 249847,
        orderUOM: 'pcs',
        amount: '3,497.86',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Sewing Thread',
        consumption: '.06 cone4k For 1 Pcs',
        maxWst: 10,
        reqQty: 63423360,
        orderUOM: 'mtr',
        amount: '8,882.72',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Sticker Size Strip',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 3,
        reqQty: 247449,
        orderUOM: 'pcs',
        amount: '8,660.65',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Woven Fabric',
        consumption: '.04 yds For 1 Pcs',
        maxWst: 2,
        reqQty: 9188,
        orderUOM: 'yds',
        amount: '16,167.36',
        supplier: ''
      },
      {
        id: uuid(),
        itemName: 'Woven size label',
        consumption: '1.00 Pcs For 1 Pcs',
        maxWst: 5,
        reqQty: 252253,
        orderUOM: 'pcs',
        amount: '2,017.97',
        supplier: ''
      }
    ]
  };
  dispatch( {
    type: FETCH_MATERIAL_REQUIREMENT_BY_STYLE,
    payload: data
  } );
};
