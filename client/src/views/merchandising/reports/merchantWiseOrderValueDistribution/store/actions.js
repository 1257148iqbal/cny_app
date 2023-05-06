/*
  Title: Actions for MerchantWiseOrderValueDistribution
  Description: Actions for MerchantWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 16-August-2022
  Modified: 16-August-2022
*/

import { FETCH_MERCHANT_WISE_ORDER_VALUE_DISTRIBUTION } from './actionType';

//Get Data by Query
export const fetchMerchantWiseOrderValueDistribution = () => async dispatch => {
  const data = {
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:24 AM',
    styleCategory: 'Polo Shirt',
    options: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light1',
      title: {
        text: 'Merchant Wise Order Value Distribution'
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label}',
          indexLabel: '{label}: {y}%',
          // indexLabelPlacement: "inside",
          dataPoints: [{ y: 100, label: 'Uni User' }]
        }
      ]
    }
  };
  dispatch({
    type: FETCH_MERCHANT_WISE_ORDER_VALUE_DISTRIBUTION,
    payload: data
  });
};
