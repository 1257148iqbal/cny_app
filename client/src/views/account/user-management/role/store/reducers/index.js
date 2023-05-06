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

const initialState = {
  roles: [],
  queryData: [],
  total: 1,
  params: {},
  selectedRole: null,
  openRoleSidebar: false,
  dropDownRoles: []
};

const rolesReduces = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return { ...state, roles: action.roles };
    case GET_ROLE_BY_ID:
      return { ...state, selectedRole: action.selectedRole };
    case SELECTED_ROLE_NULL:
      return { ...state, selectedRole: action.selectedRole };
    case OPEN_ROLE_SIDEBAR:
      return { ...state, openRoleSidebar: action.openRoleSidebar };
    case DROP_DOWN_ROLES:
      return { ...state, dropDownRoles: action.dropDownRoles };
    case GET_ROLES_BY_QUERY:
      return {
        ...state,
        queryData: action.roles,
        total: action.totalPages,
        params: action.params
      };
    case ADD_ROLE:
      return { ...state };
    case UPDATE_ROLE:
      return { ...state };
    case DELETE_ROLE:
      return { ...state };
    case DELETE_ROLES_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};
export default rolesReduces;
