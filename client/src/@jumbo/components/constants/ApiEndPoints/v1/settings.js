/*
  > Title: End Points of Daily Datasheet settings
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-09-16
*/

/*
/api/v{version}/DataSheetSetting/get-data-sheet-sections
*/

export const DAILY_DATA_SHEET_SETTINGS = {
  get_data_sheet_sections: `/api/v1/DataSheetSetting/get-data-sheet-sections`,
  get_all: `/api/v1/DataSheetSetting/get-data-sheet-settings`,
  get_archive: `/api/v1/DataSheetSetting/get-archive-data-sheet-settings`,
  get_active: `/api/v1/DataSheetSetting/get-active-data-sheet-settings`,
  get_single: `/api/v1/DataSheetSetting/get-data-sheet-setting`,
  get_data_sheet_with_reading: `/api/v1/DataSheetSetting/get-data-sheet-settings-with-reading`,
  create: `/api/v1/DataSheetSetting/save-data-sheet-setting`,
  update: `/api/v1/DataSheetSetting/update-data-sheet-setting`,
  delete: `/api/v1/DataSheetSetting/delete-data-sheet-setting`,
  restore: `/api/v1/DataSheetSetting/retrieve-data-sheet-setting`
};
