/*
  > Title: End Points of shift Report Settings
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-30
  > Updated: 2021-11-10
*/

export const SHIFT_REPORT_SETTINGS = {
  get_all_shift_sections: `/api/v1/ShiftReportSetting/get-all-shift-sections`,
  get_all_value_from: `/api/v1/ShiftReportSetting/get-all-value-from`,
  get_all_lab_column: `/api/v1/ShiftReportSetting/get-all-lab-column`,
  get_all_feed_type: `/api/v1/ShiftReportSetting/get-all-feed-type`,
  get_all_feed_tank_symbol: `/api/v1/ShiftReportSetting/get-all-feed-tank-symbol`,
  get_all_stability: `/api/v1/ShiftReportSetting/get-all-stability`,
  get_all_fuel_type: `/api/v1/ShiftReportSetting/get-all-fuel-type`,
  get_all_load: `/api/v1/ShiftReportSetting/get-all-load`,
  get_all_h_plant: `/api/v1/ShiftReportSetting/get-all-h-plant`,
  get_all: `/api/v1/ShiftReportSetting/get-shift-report-settings`,
  get_archive: `/api/v1/ShiftReportSetting/get-archive-shift-report-settings`,
  get_single: `/api/v1/ShiftReportSetting/get-shift-report-setting`,
  get_all_calculation_type: `/api/v1/ShiftReportSetting/get-all-calculation-type`,
  get_all_calculation_point: `/api/v1/ShiftReportSetting/get-all-calculation-point`,
  get_shift_report_with_reading: `/api/v1/ShiftReportSetting/get-shift-report-settings-with-reading`,
  create: `/api/v1/ShiftReportSetting/save-shift-report-setting`,
  update: `/api/v1/ShiftReportSetting/update-shift-report-setting`,
  delete: `/api/v1/ShiftReportSetting/delete-shift-report-setting`,
  delete_shift_mapping: `/api/v1/ShiftReportSetting/delete-shift-mapping`,
  restore: `/api/v1/ShiftReportSetting/retrieve-shift-report-setting`
};
