export const accountApi = {
  module: {
    get_modules: `/api/modules/get-all`,
    get_modules_by_query: `/api/modules/get-by-query`,
    get_module_by_id: `/api/module/get-by-id`,
    add_module: `/api/module/add`,
    update_module: `/api/module/update`,
    delete_module: `/api/module/delete`,
    delete_modules_by_range: `/api/module/delete-range`
  },
  user: {
    get_users: `/api/users/get-all`,
    get_users_by_query: `/api/users/get-by-query`,
    get_user_by_id: `/api/user/get-by-id`,
    add_user: `/api/user/add`,
    update_user: `/api/user/update`,
    delete_user: `/api/user/delete`,
    delete_users_by_range: `/api/user/delete-range`
  },

  role: {
    get_roles: `/api/roles/get-all`,
    get_roles_by_query: `/api/roles/get-by-query`,
    get_role_by_id: `/api/role/get-by-id`,
    add_role: `/api/role/add`,
    update_role: `/api/role/update`,
    delete_role: `/api/role/delete`,
    delete_roles_by_range: `/api/role/delete-range`
  }
};
