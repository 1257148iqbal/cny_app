/*
  Title: Actions for StyleCategoryWiseOrderValueDistribution
  Description: Actions for StyleCategoryWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 14-August-2022
  Modified: 14-August-2022
*/

import { FETCH_STYLE_CATEGORY_WISE_ORDER_VALUE_DISTRIBUTION } from './actionType';

//Get Data by Query
export const fetchStyleCategoryWiseOrderValueDistribution = () => async dispatch => {
  const data = {
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:24 AM',
    styleCategory: 'Polo Shirt',
    options: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light1',
      title: {
        text: 'Style Category-Wise Order Value Distribution'
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{label}-{styleCategory}',
          indexLabel: '{label}: {y}%',
          startAngle: -90,
          // indexLabelPlacement: "inside",
          dataPoints: [
            { y: 30, label: 'Mens', styleCategory: 'Polo Shirt' },
            { y: 24, label: 'Baby', styleCategory: 'Shirt' },
            { y: 20, label: 'Womens', styleCategory: 'T-Shirt' },
            { y: 14, label: 'New Mens', styleCategory: 'Polo Shirt' },
            { y: 12, label: 'Old Mens', styleCategory: 'Polo Shirt' }
          ]
        }
      ]
    }
  };
  dispatch({
    type: FETCH_STYLE_CATEGORY_WISE_ORDER_VALUE_DISTRIBUTION,
    payload: data
  });
};
