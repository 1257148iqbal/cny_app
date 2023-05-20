/*
  > Title: End Points of Tag
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-28
*/

export const TAG = {
  get_all: `/api/v1/Tag/get-tags`,
  get_all_by_section: `/api/v1/Tag/get-tags-by-section-group`,
  get_archive: `/api/v1/Tag/get-archive-tags`,
  get_active: `/api/v1/Tag/get-active-tags`,
  get_single: `/api/v1/Tag/get-tag`,
  get_by_section: `/api/v1/Tag/get-tags-by-section`,
  get_with_last_reading: `/api/v1/Tag/get-tags-with-last-reading`,
  create: `/api/v1/Tag/save-tag`,
  update: `/api/v1/Tag/update-tag`,
  delete: `/api/v1/Tag/delete-tag`,
  restore: `/api/v1/Tag/retrieve-tag`
};
