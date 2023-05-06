/*
  Title: Actions for MerchantBuyerWiseOrderValueDistribution
  Description: Actions for MerchantBuyerWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 16-August-2022
  Modified: 1416-August-2022
*/

import { FETCH_MERCHANT_BUYER_WISE_ORDER_VALUE_DISTRIBUTION } from './actionType';

//Get Data by Query
export const fetchMerchantBuyerWiseOrderValueDistribution = () => async dispatch => {
  const data = {
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:24 AM',
    value: 'Polo Shirt',
    merchantOptions: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light1',
      title: {
        text: 'Merchant Wise'
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label}',
          indexLabel: '{label}: {y}%',
          startAngle: -90,
          // indexLabelPlacement: "inside",
          dataPoints: [
            { y: 30, label: 'Mens', value: '10,767,046$' },
            { y: 24, label: 'Baby', value: '160,168$' },
            { y: 20, label: 'Womens', value: '35,578$' },
            { y: 14, label: 'New Mens', value: '1,267,660$' },
            { y: 12, label: 'Old Mens', value: '138,697$' }
          ]
        }
      ]
    },
    buyerOptions: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light1',
      title: {
        text: 'Buyer Wise'
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label}',
          indexLabel: '{value}({y})%',
          startAngle: -90,
          // indexLabelPlacement: "inside",
          dataPoints: [
            { y: 30, label: 'Mens', value: '10,767,046$' },
            { y: 24, label: 'Baby', value: '160,168$' },
            { y: 20, label: 'Womens', value: '35,578$' },
            { y: 14, label: 'New Mens', value: '1,267,660$' },
            { y: 12, label: 'Old Mens', value: '138,697$' }
          ]
        }
      ]
    }
  };
  dispatch({
    type: FETCH_MERCHANT_BUYER_WISE_ORDER_VALUE_DISTRIBUTION,
    payload: data
  });
};
