/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { confirmDialog } from '@custom/ConfirmDialog';
import { notify } from '@custom/notifications';
import { baseAxios } from '@services';
import { accountApi } from '@services/api-end-points/account';
import {
  ADD_MODULE,
  DELETE_MODULE,
  DELETE_MODULES_BY_RANGE,
  DROP_DOWN_MODULES,
  GET_MODULES,
  GET_MODULES_BY_QUERY,
  GET_MODULE_BY_ID,
  OPEN_MODULE_SIDEBAR,
  SELECTED_MODULE_NULL,
  UPDATE_MODULE
} from '../action-types';

const confirmObj = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  confirmButtonText: 'Yes !',
  cancelButtonText: 'No'
};

//Get All Module without Query
export const getAllModules = () => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.module.get_modules}`).then(response => {
      dispatch({
        type: GET_MODULES,
        modules: response.data
      });
    });
  };
};

/// Get All Module Without Query
export const getDropDownModules = () => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.module.get_modules}`).then(response => {
      dispatch({
        type: DROP_DOWN_MODULES,
        dropDownModules: response.data.map(item => ({ value: item.id, label: item.moduleName }))
      });
    });
  };
};

//Get Data by Query
export const getModuleByQuery = params => {
  return async dispatch => {
    await baseAxios.get(`${accountApi.module.get_modules_by_query}`, params).then(response => {
      dispatch({
        type: GET_MODULES_BY_QUERY,
        modules: response.data.modules,
        totalPages: response.data.total,
        params
      });
    });
  };
};

// ** Get Module by Id
export const getModuleById = id => {
  return async dispatch => {
    await baseAxios
      .get(`${accountApi.module.get_module_by_id}`, { id })
      .then(response => {
        dispatch({
          type: GET_MODULE_BY_ID,
          selectedModule: response.data ? response.data : null
        });
      })
      .catch(err => console.log(err));
  };
};

/// Selected Module Null after Edit or Edit Cancel
export const selectedModuleNull = () => {
  return async dispatch => {
    await dispatch({
      type: SELECTED_MODULE_NULL,
      selectedModule: null
    });
  };
};

// ** Add new Module
export const addModule = module => {
  return async (dispatch, getState) => {
    await baseAxios
      .post(`${accountApi.module.add_module}`, module)
      .then(response => {
        dispatch({
          type: ADD_MODULE,
          module
        });
      })
      .then(() => {
        notify('success', 'The Module has been added Successfully!');
        dispatch(getModuleByQuery(getState().modules.params));
        dispatch(getAllModules());
      })
      .catch(err => console.log(err));
  };
};

// ** Update Module
export const updateModule = module => {
  return (dispatch, getState) => {
    baseAxios
      .post(`${accountApi.module.update_module}`, { module })
      .then(response => {
        dispatch({
          type: UPDATE_MODULE,
          module
        });
      })
      .then(() => {
        notify('success', 'The Module has been updated Successfully!');
        dispatch(getModuleByQuery(getState().modules.params));
        dispatch(getAllModules());
      })
      .catch(err => console.log(err));
  };
};

// ** Delete Module
export const deleteModule = id => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(async e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${accountApi.module.delete_module}`, { id })
          .then(response => {
            dispatch({
              type: DELETE_MODULE
            });
          })
          .then(() => {
            notify('success', 'The Module has been deleted Successfully!');
            dispatch(getModuleByQuery(getState().modules.params));
            dispatch(getAllModules());
          });
      }
    });
  };
};

// ** Delete Module by Range
export const deleteRangeModule = ids => {
  return (dispatch, getState) => {
    confirmDialog(confirmObj).then(e => {
      if (e.isConfirmed) {
        baseAxios
          .delete(`${accountApi.module.delete_modules_by_range}`, { ids })
          .then(response => {
            dispatch({
              type: DELETE_MODULES_BY_RANGE
            });
          })
          .then(() => {
            notify('success', 'Module has been deleted Successfully!');
            dispatch(getModuleByQuery(getState().modules.params));
            dispatch(getAllModules());
          });
      }
    });
  };
};

// ** Open  Module Sidebar
export const handleOpenModuleSidebar = condition => {
  return async dispatch => {
    await dispatch({
      type: OPEN_MODULE_SIDEBAR,
      openModuleSidebar: condition
    });
  };
};
