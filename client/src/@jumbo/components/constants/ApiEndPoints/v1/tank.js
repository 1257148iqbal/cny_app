/*
  > Title: End Points of Decoking Labratory Result 
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-27
*/

export const TANK = {
  get_all: `/api/v1/Tank/get-tanks`,
  get_archive: `/api/v1/Tank/get-archive-tanks`,
  get_active: `/api/v1/Tank/get-active-tanks`,
  get_single: `/api/v1/Tank/get-tank`,
  create: `/api/v1/Tank/save-tank`,
  update: `/api/v1/Tank/update-tank`,
  delete: `/api/v1/Tank/delete-tank`,
  restore: `/api/v1/Tank/retrieve-tank`
};
