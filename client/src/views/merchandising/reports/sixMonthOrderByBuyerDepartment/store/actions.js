/*
  Title: Actions for SixMonthOrderByBuyerDepartment
  Description: Actions for SixMonthOrderByBuyerDepartment
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_SIX_MONTH_ORDER_BY_BUYER_DEPARTMENT } from './actionType';

//Get Data by Query
export const fetchSixMonthOrderByBuyerDepartment = () => async dispatch => {
  const data = [
    {
      id: uuid(),
      buyer: 'IFG',
      details: [
        {
          id: uuid(),
          department: 'BOYS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'LADIES',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'MENS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'Womens',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        }
      ]
    },
    {
      id: uuid(),
      buyer: 'NTD Apparel Inc',
      details: [
        {
          id: uuid(),
          department: 'BOYS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'GIRLS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'LADIES',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        }
      ]
    },
    {
      id: uuid(),
      buyer: 'RICHLU MANUFACTURING CO',
      details: [
        {
          id: uuid(),
          department: 'BOYS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'GIRLS',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'LADIES',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        }
      ]
    },
    {
      id: uuid(),
      buyer: 'H&M',
      details: [
        {
          id: uuid(),
          department: 'DENVER HAYES',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        },
        {
          id: uuid(),
          department: 'WIND RIVER',
          totalQty: 409200,
          totalValue: 1683221.0,
          pcs_jul: 0,
          amount_jul: 0.0,
          pcs_aug: 258862,
          amount_aug: 1065077.34,
          pcs_sep: 0,
          amount_sep: 0.0,
          pcs_oct: 13176,
          amount_oct: 54278.4,
          pcs_nov: 137162,
          amount_nov: 563865.06,
          pcs_dec: 0,
          amount_dec: 0.0
        }
      ]
    }
  ];
  dispatch({
    type: FETCH_SIX_MONTH_ORDER_BY_BUYER_DEPARTMENT,
    payload: data
  });
};
