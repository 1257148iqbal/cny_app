/*
  Title: Actions for SampleRequisition
  Description: Actions for SampleRequisition
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_SAMPLE_REQUISITION } from './actionType';

//Get Data by Query
export const fetchSampleRequisition = () => async dispatch => {
  const data = {
    requisitionId: 'SRM-18-1',
    requisitionDate: '10/03/2018',
    sampleType: 'SMS Sample',
    buyer: 'MARIKA LLC',
    season: 'FALL-18',
    sampleDeadLine: '10/10/2018',
    marchandiser: 'Masud Kaiser Ahmed',
    sampleInCharge: '',
    remarks: 'it is repeat for FALL 19',
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    sampleDescription: [
      {
        id: uuid(),
        style: 'MLL0594A',
        styleDescription: 'OLYMPIA LEGGING',
        color: '001-BLACK 19-4007 TCX',
        size: 'SIZE-S',
        quantity: 2
      },
      {
        id: uuid(),
        style: 'MLL0594B',
        styleDescription: 'OLYMPIA LEGGING',
        color: '001-BLACK 19-4007 TCX',
        size: 'SIZE-S',
        quantity: 3
      },
      {
        id: uuid(),
        style: 'MLL0594C',
        styleDescription: 'OLYMPIA LEGGING',
        color: '001-BLACK 19-4007 TCX',
        size: 'SIZE-M',
        quantity: 4
      }
    ]
  };
  dispatch({
    type: FETCH_SAMPLE_REQUISITION,
    payload: data
  });
};
