/*
  Title: Reducer for BudgetSheet
  Description: Reducer for BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/
import _ from 'lodash';
import { FETCH_USER_WISE_ROLES, LOADING } from './actionType';

const initialState = {
  loading: false,
  items: [],
  params: {},
  selectedItem: null
};

export const userWiseRolesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_USER_WISE_ROLES: {
      const uniquePermissions = [...new Set(payload.permissions.map(p => p.split('.')[1]))];
      const permissions = {
        ...payload,
        permissions: uniquePermissions.map(up => ({
          moduleNames: _.startCase(up),
          categoryList: [...new Set(payload.permissions.filter(item => item.split('.')[1] === up).map(x => x.split('.')[2]))].map(cl => ({
            catetoryName: _.startCase(cl),
            roles: payload.permissions
              .filter(p => p.split('.')[1] === up)
              .filter(c => c.split('.')[2] === cl)
              .map(item => item.split('.')[3])
          }))
        }))
      };
      return { ...state, items: permissions };
    }
    default:
      return {};
  }
};
