/*
  Title: Actions for MaterialRequirementItemDetailsPoWise
  Description: Actions for MaterialRequirementItemDetailsPoWise
  Author: Iqbal Hossain
  Date: 17-August-2022
  Modified: 17-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS_PO_WISE } from './actionType';

//Get Data by Query
export const fetchMaterialRequirementItemDetailsPoWise = () => async dispatch => {
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
        size_S: 136,
        size_M: 272,
        size_L: 272,
        size_XL: 136,
        Total: 816
      },
      {
        id: uuid(),
        color: '402 MIDNIGHT BLUE',
        size_S: 100,
        size_M: 200,
        size_L: 200,
        size_XL: 100,
        Total: 600
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
  dispatch({
    type: FETCH_MATERIAL_REQUIREMENT_ITEM_DETAILS_PO_WISE,
    payload: data
  });
};
