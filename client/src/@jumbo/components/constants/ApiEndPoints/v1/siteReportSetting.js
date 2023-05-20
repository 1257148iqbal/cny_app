/*
  > Title: End Points of Site Report Settings
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-17
*/

export const SITE_REPORT_SETTINGS = {
  get_all_site_sections: `/api/v1/SiteReportSetting/get-all-site-sections`,
  get_all: `/api/v1/SiteReportSetting/get-site-report-settings`,
  get_archive: `/api/v1/SiteReportSetting/get-site-report-settings`,
  get_single: `/api/v1/SiteReportSetting/get-site-report-setting`,
  create: `/api/v1/SiteReportSetting/save-site-report-setting`,
  update: `/api/v1/SiteReportSetting/update-site-report-setting`,
  delete: `/api/v1/SiteReportSetting/delete-site-report-setting`,
  delete_auto_reading_setting: `/api/v1/SiteReportSetting/delete-auto-reading-setting`,
  get_site_report_with_reading: `/api/v1/SiteReportSetting/get-site-report-settings-with-reading`,
  restore: `/api/v1/SiteReportSetting/retrieve-site-report-setting`
};
