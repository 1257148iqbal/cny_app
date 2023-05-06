/*
  Title: Actions for MaterialRequirementItemDetails
  Description: Actions for MaterialRequirementItemDetails
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS } from './actionType';

//Get Data by Query
export const fetchMaterialRequirementItemDetails = () => async dispatch => {
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
        color: '001 BLACK',
        size_S: 15996,
        size_M: 22872,
        size_L: 8328,
        size_XL: 220,
        size_XS: 1232,
        Total: 48648
      },
      {
        id: uuid(),
        color: '36X LICHEN GREEN',
        size_S: 3790,
        size_M: 5730,
        size_L: 2030,
        size_XL: 90,
        size_XS: 0,
        Total: 11640
      },
      {
        id: uuid(),
        color: '43J PEACOAT',
        size_S: 1248,
        size_M: 1747,
        size_L: 729,
        size_XL: 70,
        size_XS: 160,
        Total: 3954
      },
      {
        id: uuid(),
        color: '4P5 STARRY NIGHT',
        size_S: 1832,
        size_M: 2748,
        size_L: 916,
        size_XL: 0,
        size_XS: 0,
        Total: 5496
      },
      {
        id: uuid(),
        color: '558 OMBRE BLUE',
        size_S: 1282,
        size_M: 1943,
        size_L: 701,
        size_XL: 40,
        size_XS: 0,
        Total: 3966
      },
      {
        id: uuid(),
        color: '95X WILD PLUM',
        size_S: 2392,
        size_M: 3508,
        size_L: 1196,
        size_XL: 0,
        size_XS: 80,
        Total: 7176
      },
      {
        id: uuid(),
        color: '9B2 CONCORD GRAPE',
        size_S: 728,
        size_M: 1127,
        size_L: 469,
        size_XL: 70,
        size_XS: 0,
        Total: 2394
      },
      {
        id: uuid(),
        color: '3C7 FOREST NIGHT',
        size_S: 1600,
        size_M: 2400,
        size_L: 800,
        size_XL: 0,
        size_XS: 0,
        Total: 4800
      },
      {
        id: uuid(),
        color: '93X DEEP PURPLE',
        size_S: 600,
        size_M: 900,
        size_L: 300,
        size_XL: 0,
        size_XS: 0,
        Total: 1800
      }
    ],
    materialInfos: [
      {
        id: uuid(),
        itemGroup: 'Elastic',
        details: [
          {
            id: uuid(),
            itemName: 'Elastic Elastic . SIZE 3/8 INCH WHITE . .',
            orderUOM: 'yds',
            reqQty: 1385,
            bookQty: 0,
            bookQty_plus_minus: 1385,
            receiveQty: 1385,
            issueQty: 0,
            balanceStock: 0
          }
        ]
      },
      {
        id: uuid(),
        itemGroup: 'Carton',
        details: [
          {
            id: uuid(),
            itemName: 'Carton 7 PLY CARTON WITH GUM PASTING L 47 X W 32 X H 32 CM 001 BLACK .',
            orderUOM: 'pcs',
            reqQty: 17,
            bookQty: 0,
            bookQty_plus_minus: 17,
            receiveQty: 17,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Carton 7 PLY CARTON WITH GUM PASTING L 47 X W 32 X H 32 CM 402 MIDNIGHT BLUE .',
            orderUOM: 'pcs',
            reqQty: 13,
            bookQty: 0,
            bookQty_plus_minus: 13,
            receiveQty: 13,
            issueQty: 0,
            balanceStock: 0
          }
        ]
      },
      {
        id: uuid(),
        itemGroup: 'Poly Bag',
        details: [
          {
            id: uuid(),
            itemName: 'Poly Bag Poly Bag PC SIZE-L . L18 X W11"',
            orderUOM: 'dzn',
            reqQty: 41,
            bookQty: 0,
            bookQty_plus_minus: 41,
            receiveQty: 41,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Poly Bag Poly Bag PC SIZE-M . L18 X W11"',
            orderUOM: 'dzn',
            reqQty: 41,
            bookQty: 0,
            bookQty_plus_minus: 41,
            receiveQty: 41,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Poly Bag Poly Bag PC SIZE-S . L18 X W11"',
            orderUOM: 'dzn',
            reqQty: 21,
            bookQty: 0,
            bookQty_plus_minus: 21,
            receiveQty: 21,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Poly Bag Poly Bag PC SIZE-XL . L18 X W11"',
            orderUOM: 'dzn',
            reqQty: 21,
            bookQty: 0,
            bookQty_plus_minus: 21,
            receiveQty: 21,
            issueQty: 0,
            balanceStock: 0
          }
        ]
      },
      {
        id: uuid(),
        itemGroup: 'Hang Tag',
        details: [
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 001 BLACK SIZE-L .',
            orderUOM: 'pcs',
            reqQty: 281,
            bookQty: 0,
            bookQty_plus_minus: 281,
            receiveQty: 281,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 001 BLACK SIZE-M .',
            orderUOM: 'pcs',
            reqQty: 281,
            bookQty: 0,
            bookQty_plus_minus: 281,
            receiveQty: 281,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 001 BLACK SIZE-S .',
            orderUOM: 'pcs',
            reqQty: 141,
            bookQty: 0,
            bookQty_plus_minus: 141,
            receiveQty: 141,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 001 BLACK SIZE-XL .',
            orderUOM: 'pcs',
            reqQty: 141,
            bookQty: 0,
            bookQty_plus_minus: 141,
            receiveQty: 141,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 402 MIDNIGHT BLUE SIZE-L .',
            orderUOM: 'pcs',
            reqQty: 206,
            bookQty: 0,
            bookQty_plus_minus: 206,
            receiveQty: 206,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 402 MIDNIGHT BLUE SIZE-M .',
            orderUOM: 'pcs',
            reqQty: 206,
            bookQty: 0,
            bookQty_plus_minus: 206,
            receiveQty: 206,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 402 MIDNIGHT BLUE SIZE-S .',
            orderUOM: 'pcs',
            reqQty: 103,
            bookQty: 0,
            bookQty_plus_minus: 103,
            receiveQty: 103,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Brand/Barcode BCHTU-675-B 402 MIDNIGHT BLUE SIZE-XL .',
            orderUOM: 'pcs',
            reqQty: 103,
            bookQty: 0,
            bookQty_plus_minus: 103,
            receiveQty: 103,
            issueQty: 0,
            balanceStock: 0
          },
          {
            id: uuid(),
            itemName: 'Hang Tag Hang Tag Function RF-0013 . . .',
            orderUOM: 'pcs',
            reqQty: 1459,
            bookQty: 0,
            bookQty_plus_minus: 1459,
            receiveQty: 1459,
            issueQty: 0,
            balanceStock: 0
          }
        ]
      }
    ]
  };
  dispatch( {
    type: FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS,
    payload: data
  } );
};
