/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { confirmDialog } from '@custom/ConfirmDialog';
import { notify } from '@custom/notifications';
import { confirmObj } from '@enums';
import { baseAxios } from '@services';
import { accountApi } from '@services/api-end-points/account';
import {
  ADD_USER,
  DELETE_USER,
  DELETE_USER_BY_RANGE,
  DROP_DOWN_USERS,
  GET_USERS,
  GET_USERS_BY_QUERY,
  GET_USER_BY_ID,
  OPEN_USER_SIDEBAR,
  SELECTED_USER_NULL,
  UPDATE_USER
} from '../action-types';

///Get All without Query
export const getAllUsers = () => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.user.get_users}`).then(response => {
      dispatch({
        type: GET_USERS,
        users: response.data
      });
    });
  };
};

///Get All DropDown User without query
export const getDropDownUsers = () => {
  return async dispatch => {
    await baseAxios.getAllUsers(`${accountApi.user.get_users}`).then(response => {
      dispatch({
        type: DROP_DOWN_USERS,
        dropDownUsers: response.data.map(item => ({
          value: item.id,
          label: item.fullName
        }))
      });
    });
  };
};

//Get Data by Query
export const getUserByQuery = params => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.user.get_users_by_query}`, params).then(response => {
      dispatch({
        type: GET_USERS_BY_QUERY,
        users: response.data.user,
        totalPages: response.data.total,
        params
      });
    });
  };
};

//Get User By ID
export const getUserById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${accountApi.user.get_user_by_id}`, { id })
      .then(response => {
        dispatch({
          type: GET_USER_BY_ID,
          selectedUser: response.data ? response.data : null
        });
      })
      .catch(err => console.log(err));
  };
};

///Selected User Null after Edit or Cancel
export const selectedUserNull = () => {
  return async dispatch => {
    await dispatch({
      type: SELECTED_USER_NULL,
      selectedUser: null
    });
  };
};

// Add new User
export const addUser = user => {
  return async (dispatch, getState) => {
    await baseAxios
      .post(`${accountApi.user.add_user}`, user)
      .then(response => {
        dispatch({
          type: ADD_USER,
          user
        });
      })
      .then(() => {
        notify('success', 'The User has been added Successfully!');
        dispatch(getUserByQuery(getState().users.params));
        dispatch(getAllUsers());
      })
      .catch(err => console.log(err));
  };
};

// ** Update User
export const updateUser = user => {
  return (dispatch, getState) => {
    baseAxios
      .post(`${accountApi.user.update_user}`, { user })
      .then(response => {
        dispatch({
          type: UPDATE_USER,
          user
        });
      })
      .then(() => {
        notify('success', 'The User has been updated Successfully!');
        dispatch(getUserByQuery(getState().users.params));
        dispatch(getAllUsers());
      })
      .catch(err => console.log(err));
  };
};

//Delete User
export const deleteUser = id => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        await baseAxios
          .delete(`${accountApi.user.delete_user}`, { id })
          .then(response => {
            dispatch({
              type: DELETE_USER
            });
          })
          .then(() => {
            notify('success', 'The User has been updated Successfully!');
            dispatch(getUserByQuery(getState().users.params));
            dispatch(getAllUsers());
          });
      }
    });
  };
};

//Delete User by Range
export const deleteRangeUser = ids => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${accountApi.user.delete_users_by_range}`, { ids })
          .then(response => {
            dispatch({
              type: DELETE_USER_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'The User has been deleted Successfully!');
            dispatch(getUserByQuery(getState().users.params));
            dispatch(getAllUsers());
          });
      }
    });
  };
};

//Open User Sidebar
export const handleOpenUserSidebar = condition => {
  return async dispatch => {
    await dispatch({
      type: OPEN_USER_SIDEBAR,
      openUserSidebar: condition
    });
  };
};
