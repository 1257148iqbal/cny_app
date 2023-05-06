/*
  Title: Actions for AverageCMValueByStyleCategory
  Description: Actions for AverageCMValueByStyleCategory
  Author: Iqbal Hossain
  Date: 21-August-2022
  Modified: 21-August-2022
*/

import { FETCH_AVERAGE_CM_VALUE_BY_STYLE_CATEGORY } from './actionType';

//Get Data by Query
export const fetchAverageCMValueByStyleCategory = () => async dispatch => {
  const data = {
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:24 AM',
    animationEnabled: true,
    title: {
      text: 'Average CM Value By Style Category'
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: 'splineArea',
        showInLegend: true,
        legendText: 'Chart',
        xValueFormatString: 'YYYY',
        indexLabel: '{label}: {y}%',
        dataPoints: [
          { y: 130, label: 'A Shirt' },
          { y: 90, label: 'Pant' },
          { y: 100, label: 'Hoodie' },
          { y: 80, label: 'Tops.' },
          { y: 120, label: 'Top Ladies' }
        ]
      }
    ]
  };
  dispatch( {
    type: FETCH_AVERAGE_CM_VALUE_BY_STYLE_CATEGORY,
    payload: data
  } );
};
