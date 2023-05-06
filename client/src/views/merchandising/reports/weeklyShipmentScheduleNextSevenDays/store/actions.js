/*
  Title: Actions for WeeklyShipmentScheduleNextSevenDays
  Description: Actions for WeeklyShipmentScheduleNextSevenDays
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_WEEKLY_SHIPMENT_SCHEDULE_NEXT_SEVEN_DAYS } from './actionType';

//Get Data by Query
export const fetchWeeklyShipmentScheduleNextSevenDays = () => async dispatch => {
  const data = {
    id: uuid(),
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    details: [
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: 'W030002 (TOP)',
        ppNo: '14389',
        orderQty: 80,
        fob: 7.81,
        shipmentDate: '15.07.22',
        value: 625,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: 'W030002 (BTM)',
        ppNo: '14389',
        orderQty: 80,
        fob: 7.81,
        shipmentDate: '15.07.22',
        value: 625,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: '30003',
        ppNo: '14389',
        orderQty: 80,
        fob: 4.75,
        shipmentDate: '15.07.22',
        value: 380,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: '30004',
        ppNo: '14389',
        orderQty: 80,
        fob: 5.04,
        shipmentDate: '15.07.22',
        value: 403,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: 'JS90032 (191812)',
        ppNo: '14276',
        orderQty: 1584,
        fob: 3.3,
        shipmentDate: '19.07.22',
        value: 5227,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'GELMART INTERNATIONAL',
        styleRef: 'JS90032 (191813)',
        ppNo: '14276',
        orderQty: 456,
        fob: 3.32,
        shipmentDate: '19.07.22',
        value: 1514,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'NTD Apparel Inc',
        styleRef: '6326-2304',
        ppNo: '0000262424',
        orderQty: 7500,
        fob: 6.8,
        shipmentDate: '20.07.22',
        value: 51000,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
      {
        id: uuid(),
        customer: 'NTD Apparel Inc',
        styleRef: '6326-2314',
        ppNo: '0000262380',
        orderQty: 10500,
        fob: 6.8,
        shipmentDate: '20.07.22',
        value: 71400,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      }
    ]
  };
  dispatch({
    type: FETCH_WEEKLY_SHIPMENT_SCHEDULE_NEXT_SEVEN_DAYS,
    payload: data
  });
};
