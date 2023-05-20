/*
  > Title: End Points of Department
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-29
*/

export const DEPARTMENT = {
  get_all: `/api/v1/Department/get-departments`,
  get_all_active: `/api/v1/Department/get-active-departments`,
  get_archive: `/api/v1/Department/get-archive-departments`,
  get_single: `/api/v1/Department/get-department`,
  create: `/api/v1/Department/save-department`,
  update: `/api/v1/Department/update-department`,
  delete: `/api/v1/Department/delete-department`,
  restore: `/api/v1/Department/retrieve-department`
};
