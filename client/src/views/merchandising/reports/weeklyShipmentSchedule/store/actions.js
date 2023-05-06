/*
  Title: Actions for WeeklyShipmentSchedule
  Description: Actions for WeeklyShipmentSchedule
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_WEEKLY_SHIPMENT_SCHEDULE } from './actionType';

//Get Data by Query
export const fetchWeeklyShipmentSchedule = () => async dispatch => {
  const data = {
    id: uuid(),
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    details: [
      {
        id: uuid(),
        customer: 'IFG',
        styleRef: 'LF4247',
        ppNo: '144331',
        orderQty: 12000,
        fob: 7.63,
        shipmentDate: '10.07.22',
        value: 91530,
        shipmentMode: 'SEA',
        payeeForShipment: '',
        offeredDate: '',
        productionUnit: '',
        remarks: ''
      },
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
      }
    ]
  };
  dispatch({
    type: FETCH_WEEKLY_SHIPMENT_SCHEDULE,
    payload: data
  });
};
