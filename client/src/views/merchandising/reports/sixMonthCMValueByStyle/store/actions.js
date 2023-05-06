/*
  Title: Actions for SixMonthCMValueByStyle
  Description: Actions for SixMonthCMValueByStyle
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_SIX_MONTH_CM_VALUE_BY_STYLE } from './actionType';

//Get Data by Query
export const fetchSixMonthCMValueByStyle = () => async dispatch => {
  const data = [
    {
      id: uuid(),
      styleCategory: 'Top Bottom set',
      marchantInfos: [
        {
          id: uuid(),
          marchantName: 'Ifteker Imam',
          details: [
            {
              id: uuid(),
              styleNo: '6BSEDHF2-4004',
              totalQty: 14000,
              totalValue: 74200.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: '6BSEDHF2-5000',
              totalQty: 10000,
              totalValue: 51000.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: '6BSEDHFS2-2504',
              totalQty: 30000,
              totalValue: 187500.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      styleCategory: 'POPOVER',
      marchantInfos: [
        {
          id: uuid(),
          marchantName: 'SM Sazzad',
          details: [
            {
              id: uuid(),
              styleNo: '4369SMS32-(RUFFLE DRESS)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: '4369SMS32-(SS DRESS)',
              totalQty: 372331,
              totalValue: 1537727.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: '4369SMS32- (TANK DRESS)',
              totalQty: 372331,
              totalValue: 1537727.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 0,
              margin_aug: 0,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 0,
              margin_oct: 0,
              cm_nov: 0,
              margin_nov: 0,
              cm_dec: 0,
              margin_dec: 0.0
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      styleCategory: 'Pant .',
      marchantInfos: [
        {
          id: uuid(),
          marchantName: 'Musfiat Uddin',
          details: [
            {
              id: uuid(),
              styleNo: 'W030002 (BTM)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 563865.06,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: 'W030002 (BTM)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 563865.06,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: 'W030002 (BTM)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 563865.06,
              cm_dec: 0,
              margin_dec: 0.0
            }
          ]
        },
        {
          id: uuid(),
          marchantName: 'Maung Kyaw Oo',
          details: [
            {
              id: uuid(),
              styleNo: 'W030002 (BTM)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 563865.06,
              cm_dec: 0,
              margin_dec: 0.0
            },
            {
              id: uuid(),
              styleNo: 'W030002 (BTM)',
              totalQty: 409200,
              totalValue: 1683221.0,
              cm_jul: 0,
              margin_jul: 0.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 563865.06,
              cm_dec: 0,
              margin_dec: 0.0
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      styleCategory: 'Short .',
      marchantInfos: [
        {
          id: uuid(),
          marchantName: 'Musfiat Uddin',
          details: [
            {
              id: uuid(),
              styleNo: 'JS90031 BOTTOM',
              totalQty: 0,
              totalValue: 0,
              cm_jul: 409200,
              margin_jul: 1683221.0,
              cm_aug: 258862,
              margin_aug: 1065077.34,
              cm_sep: 0,
              margin_sep: 0.0,
              cm_oct: 13176,
              margin_oct: 54278.4,
              cm_nov: 137162,
              margin_nov: 0,
              cm_dec: 137162,
              margin_dec: 563865.06
            }
          ]
        }
      ]
    }
  ];
  dispatch({
    type: FETCH_SIX_MONTH_CM_VALUE_BY_STYLE,
    payload: data
  });
};
