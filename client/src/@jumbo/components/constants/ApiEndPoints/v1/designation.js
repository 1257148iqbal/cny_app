/*
  > Title: End Points of Designation
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-29
*/

export const DESIGNATION = {
  get_all: `/api/v1/Designation/get-designations`,
  get_all_active: `/api/v1/Designation/get-active-designations`,
  get_archive: `/api/v1/Designation/get-archive-designations`,
  get_single: `/api/v1/Designation/get-designation`,
  create: `/api/v1/Designation/save-designation`,
  update: `/api/v1/Designation/update-designation`,
  delete: `/api/v1/Designation/delete-designation`,
  restore: `/api/v1/Designation/retrieve-designation`
};
