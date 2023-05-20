/*
  > Title: End Points of Daily Datasheet settings
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-09-22
  > ModifyDate: 2021-09-25
*/

export const DAILY_DATA_SHEET = {
  get_active: `/api/v1/DailyDataSheet/get-active-daily-data-sheet`,
  get_history: `/api/v1/DailyDataSheet/get-history-daily-data-sheet`,
  get_single: `/api/v1/DailyDataSheet/get-daily-data-sheet`,
  get_archive: `/api/v1/DailyDataSheet/get-archive-daily-data-sheet`,
  create: `/api/v1/DailyDataSheet/save-daily-data-sheet`,
  update: `/api/v1/DailyDataSheet/update-daily-data-sheet`,
  delete: `/api/v1/DailyDataSheet/delete-daily-data-sheet`,
  lock: `/api/v1/DailyDataSheet/lock-daily-data-sheet`,
  unlock: `/api/v1/DailyDataSheet/unlock-daily-data-sheet`,
  restore: `/api/v1/DailyDataSheet/retrieve-daily-data-sheet`
};
