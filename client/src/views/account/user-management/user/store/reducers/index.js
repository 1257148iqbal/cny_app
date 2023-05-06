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

const initialState = {
  users: [],
  queryData: [],
  total: 1,
  params: {},
  selectedUser: null,
  openUserSidebar: false,
  dropDownUsers: null
};

const usersReduces = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users };
    case GET_USER_BY_ID:
      return { ...state, selectedUser: action.selectedUser };
    case SELECTED_USER_NULL:
      return { ...state, selectedUser: action.selectedUser };
    case OPEN_USER_SIDEBAR:
      return { ...state, openUserSidebar: action.openUserSidebar };
    case DROP_DOWN_USERS:
      return { ...state, dropDownUsers: action.dropDownUsers };
    case GET_USERS_BY_QUERY:
      return {
        ...state,
        queryData: action.users,
        total: action.totalPages,
        params: action.params
      };
    case ADD_USER:
      return { ...state };
    case UPDATE_USER:
      return { ...state };
    case DELETE_USER:
      return { ...state };
    case DELETE_USER_BY_RANGE:
      return { ...state };
    default:
      return state;
  }
};
export default usersReduces;
