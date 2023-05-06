/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { confirmDialog } from '@custom/ConfirmDialog';
import { notify } from '@custom/notifications';
import { baseAxios } from '@services';
import { accountApi } from '@services/api-end-points/account';
import {
  ADD_ROLE,
  DELETE_ROLE,
  DELETE_ROLES_BY_RANGE,
  DROP_DOWN_ROLES,
  GET_ROLES,
  GET_ROLES_BY_QUERY,
  GET_ROLE_BY_ID,
  OPEN_ROLE_SIDEBAR,
  SELECTED_ROLE_NULL,
  UPDATE_ROLE
} from '../action-types';

const confirmObj = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  confirmButtonText: 'Yes !',
  cancelButtonText: 'No'
};

//Get All Role without Query
export const getAllRoles = () => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.role.get_roles}`).then(response => {
      dispatch({
        type: GET_ROLES,
        roles: response.data
      });
    });
  };
};

/// Get All Role Without Query
export const getDropDownRoles = () => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.role.get_roles}`).then(response => {
      dispatch({
        type: DROP_DOWN_ROLES,
        dropDownRoles: response.data.map(item => ({ value: item.id, label: item.roleName }))
      });
    });
  };
};

//Get Data by Query
export const getRoleByQuery = params => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.role.get_roles_by_query}`, params).then(response => {
      dispatch({
        type: GET_ROLES_BY_QUERY,
        roles: response.data.roles,
        totalPages: response.data.total,
        params
      });
    });
  };
};

// ** Get Role by Id
export const getRoleById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${accountApi.role.get_role_by_id}`, { id })
      .then(response => {
        dispatch({
          type: GET_ROLE_BY_ID,
          selectedRole: response.data.role ? response.data.role : null
        });
      })
      .catch(err => console.log(err));
  };
};

/// Selected Role Null after Edit or Edit Cancel
export const selectedRoleNull = () => {
  return async dispatch => {
    await dispatch({
      type: SELECTED_ROLE_NULL,
      selectedRole: null
    });
  };
};

// ** Add new Role
export const addRole = role => {
  return async (dispatch, getState) => {
    await baseAxios
      .post(`${accountApi.role.add_role}`, role)
      .then(response => {
        dispatch({
          type: ADD_ROLE,
          role
        });
      })
      .then(() => {
        notify('success', 'The Role has been added Successfully!');
        dispatch(getRoleByQuery(getState().roles.params));
        dispatch(getAllRoles());
      })
      .catch(err => console.log(err));
  };
};

// ** Update Role
export const updateRole = role => {
  return (dispatch, getState) => {
    baseAxios
      .post(`${accountApi.role.update_role}`, { role })
      .then(response => {
        dispatch({
          type: UPDATE_ROLE,
          role
        });
      })
      .then(() => {
        notify('success', 'The Role has been updated Successfully!');
        dispatch(getRoleByQuery(getState().roles.params));
        dispatch(getAllRoles());
      })
      .catch(err => console.log(err));
  };
};

// ** Delete Role
export const deleteRole = id => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${accountApi.role.delete_role}`, { id })
          .then(response => {
            dispatch({
              type: DELETE_ROLE
            });
          })
          .then(() => {
            notify('success', 'The Role has been deleted Successfully!');
            dispatch(getRoleByQuery(getState().roles.params));
            dispatch(getAllRoles());
          });
      }
    });
  };
};

// ** Delete Role by Range
export const deleteRangeRole = ids => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${accountApi.role.delete_roles_by_range}`, { ids })
          .then(response => {
            dispatch({
              type: DELETE_ROLES_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'Role has been deleted Successfully!');
            dispatch(getRoleByQuery(getState().roles.params));
            dispatch(getAllRoles());
          });
      }
    });
  };
};

// ** Open  Role Sidebar
export const handleOpenRoleSidebar = condition => {
  return async dispatch => {
    await dispatch({
      type: OPEN_ROLE_SIDEBAR,
      openRoleSidebar: condition
    });
  };
};
