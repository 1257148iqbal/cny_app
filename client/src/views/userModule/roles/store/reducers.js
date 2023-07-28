/*
   Title: Reducter for Role
   Description: 
   Author: Iqbal Hossain
   Date: 25-July-2023
   Modified: 25-July-2023
*/
import { TOGGLE_ROLE_SIDEBAR } from './actionType'

const initialState = {
  loading: false,
  items: [],
  total: 0,
  isOpenSidebar: false,
  selectedRole: null,
  dropDownItems: []
}
export const roleReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    // case LOADING:
    //   return { ...state, loading: payload }
    case TOGGLE_ROLE_SIDEBAR: {
      const _updatedState = { ...state, isOpenSidebar: payload }
      if (!payload) _updatedState.selectedRole = null
      return _updatedState
    }
    default:
      return state
  }
}

