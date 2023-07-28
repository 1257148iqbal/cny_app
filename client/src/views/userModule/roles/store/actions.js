/*
   Title: Action for role
   Description: 
   Author: Iqbal Hossain
   Date: 29-July-2023
   Modified: 29-July-2023
*/

import { TOGGLE_ROLE_SIDEBAR } from './actionType'


//Open Sidebar
export const toggleRoleSidebar = condition => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ROLE_SIDEBAR,
      payload: condition
    })
  }
}


