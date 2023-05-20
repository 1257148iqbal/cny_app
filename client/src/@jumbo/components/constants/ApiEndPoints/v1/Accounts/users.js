/*
     Title: End points
     Description: End points for Users
     Author: Nasir Ahmed
     Date: 06-October-2021
     Modified: 06-October-2021
*/

export const USERS = {
  get_me: `/api/Account/users/me`,
  get_all: `/api/Account/users`,
  get_all_paginated_users: `/api/Account/paginated-users`,
  get_all_archived: `/api/Account/archive-users`,
  get_users_name: `/api/Account/users-name`,
  get_user_by_userId: `/api/Account/users`,
  create: `/api/Account/users`,
  create_operator_user: `/api/Account/operator-user`,
  update: `/api/Account/users`,
  update_user_me: `/api/Account/users/me`,
  active: `/api/Account/users/active`,
  delete: `/api/Account/users`,
  user_check_by_employeeId: `api/Account/user/employee`,
  reset_password_by_admin: `api/Account/reset-password-by-admin`
};
