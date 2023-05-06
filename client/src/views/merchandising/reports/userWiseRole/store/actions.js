/*
  Title: Actions for BudgetSheet
  Description: Actions for BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/

import { v4 as uuid } from 'uuid';
import { FETCH_USER_WISE_ROLES } from './actionType';

//Get Data by Query
export const fetchUserWiseRoles = () => async dispatch => {
  const data = {
    id: uuid(),
    userName: 'M.HIDARY',
    email: 'demo@gmail.com',
    userDesignation: 'Operator',
    userRole: 'User',
    user: 'uni user',
    reportGeneratedOn: '03-Aug-22 11:33 AM',
    permissions: [
      'permission.merchandising.style.view',
      'permission.merchandising.style.edit',
      'permission.merchandising.style.create',
      'permission.merchandising.style.delete',
      'permission.merchandising.bom.view',
      'permission.merchandising.bom.edit',
      'permission.merchandising.bom.create',
      'permission.merchandising.bom.delete',
      'permission.merchandising.budget.view',
      'permission.merchandising.budget.edit',
      'permission.merchandising.budget.delete',
      'permission.merchandising.po.view',
      'permission.merchandising.po.edit',
      'permission.merchandising.po.create',
      'permission.merchandising.po.delete',
      'permission.merchandising.costing.view',
      'permission.merchandising.costing.edit',
      'permission.merchandising.costing.create',
      'permission.merchandising.material.view',
      'permission.merchandising.material.edit',

      'permission.inventory.style.view',
      'permission.inventory.style.edit',
      'permission.inventory.style.create',
      'permission.inventory.bom.view',
      'permission.inventory.bom.edit',
      'permission.inventory.bom.create',
      'permission.inventory.bom.delete',
      'permission.inventory.budget.delete',
      'permission.inventory.po.view',
      'permission.inventory.po.edit',
      'permission.inventory.po.create',
      'permission.inventory.po.delete',
      'permission.accounts.style.view',
      'permission.accounts.style.edit',
      'permission.accounts.style.create',
      'permission.accounts.bom.view',
      'permission.accounts.bom.edit',
      'permission.accounts.bom.create',
      'permission.accounts.bom.delete',
      'permission.accounts.budget.delete',
      'permission.accounts.po.view',
      'permission.accounts.po.edit',
      'permission.accounts.po.create',
      'permission.accounts.po.delete'
    ]
  };
  dispatch({
    type: FETCH_USER_WISE_ROLES,
    payload: data
  });
};
