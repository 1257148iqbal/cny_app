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

const initialState = {
  modules: [],
  queryData: [],
  total: 1,
  params: {},
  selectedModule: null,
  openModuleSidebar: false,
  dropDownModules: null
};

const modulesReduces = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODULES:
      return { ...state, modules: action.modules };
    case GET_MODULE_BY_ID:
      return { ...state, selectedModule: action.selectedModule };
    case SELECTED_MODULE_NULL:
      return { ...state, selectedModule: action.selectedModule };
    case OPEN_MODULE_SIDEBAR:
      return { ...state, openModuleSidebar: action.openModuleSidebar };
    case DROP_DOWN_MODULES:
      return { ...state, dropDownModules: action.dropDownModules };
    case GET_MODULES_BY_QUERY:
      return {
        ...state,
        queryData: action.modules,
        total: action.totalPages,
        params: action.params
      };
    case ADD_MODULE:
      return { ...state };
    case UPDATE_MODULE:
      return { ...state };
    case DELETE_MODULE:
      return { ...state };
    case DELETE_MODULES_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};
export default modulesReduces;
