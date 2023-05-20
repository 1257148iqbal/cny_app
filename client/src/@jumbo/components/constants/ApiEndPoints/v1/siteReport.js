/*
  > Title: End Points of Site Report Settings
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-23
*/

export const SITE_REPORT = {
  get_active: `/api/v1/SiteReport/get-active-site-reports`,
  get_history: `/api/v1/SiteReport/get-history-site-reports`,
  get_archive: `/api/v1/SiteReport/get-archive-site-reports`,
  get_single: `/api/v1/SiteReport/get-site-report`,
  create: `/api/v1/SiteReport/save-site-report`,
  update: `/api/v1/SiteReport/update-site-report`,
  lock: `/api/v1/SiteReport/lock-site-report`,
  unlock: `/api/v1/SiteReport/unlock-site-report`,
  delete: `/api/v1/SiteReport/delete-site-report`,
  retrieve: `/api/v1/SiteReport/retrieve-site-report`
};
