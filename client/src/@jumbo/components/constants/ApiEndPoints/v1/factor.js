/*
  > Title: End Points of Factor
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-27
*/

export const FACTOR = {
  get_all: `/api/v1/Factor/get-factors`,
  get_archive: `/api/v1/Factor/get-archive-factors`,
  get_single: `/api/v1/Factor/get-factor`,
  create: `/api/v1/Factor/save-factor`,
  update: `/api/v1/Factor/update-factor`,
  delete: `/api/v1/Factor/delete-factor`,
  restore: `/api/v1/Factor/retrieve-factor`,
  create_update_factor: `/api/v1/Factor/create-update-factor`,
  get_factors_by_tag: `/api/v1/Factor/get-factors-by-tag`
};
