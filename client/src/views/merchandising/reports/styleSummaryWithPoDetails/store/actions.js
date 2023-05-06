/*
  Title: Actions for StyleSummaryWithPoDetails
  Description: Actions for StyleSummaryWithPoDetails
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_STYLE_SUMMARY_WITH_PO_DETAILS } from './actionType';

//Get Data by Query
export const fetchStyleSummaryWithPoDetails = () => async dispatch => {
  const data = {
    id: uuid(),
    buyer: '5 STAR APPARELS INC.',
    department: 'MENS',
    season: 'SPRING-22',
    year: '2021',
    styleNo: 'BS12SK003C',
    styleDescription: 'MOD POCKET RIB POLO',
    merchantName: 'SM Sazzad',
    styleStatus: 'In Production',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    user: 'Uni User',
    details: [
      {
        id: uuid(),
        poNo: '39001065',
        quantity: 128000,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001066',
        quantity: 16080,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001067',
        quantity: 16080,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001068',
        quantity: 52000,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001069',
        quantity: 6520,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001070',
        quantity: 6520,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      },
      {
        id: uuid(),
        poNo: '39001071',
        quantity: 15040,
        fob: 4.32,
        shimpentDate: '15-Oct-21'
      }
    ]
  };
  dispatch({
    type: FETCH_STYLE_SUMMARY_WITH_PO_DETAILS,
    payload: data
  });
};
