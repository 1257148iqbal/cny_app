/*
  > Title: End points of Switch Log
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-08-04
*/

export const LOG_SHEET = {
  get_all: `/api/v1/LogSheet/get-log-sheets`,
  get_active: `/api/v1/LogSheet/get-active-log-sheets`,
  get_history: `/api/v1/LogSheet/get-history-log-sheets`,
  get_archive: `/api/v1/LogSheet/get-archive-log-sheets`,
  check_duplicate_log_sheet: `/api/v1/LogSheet/check-duplicate-log-sheet`,
  get_single: `/api/v1/LogSheet/get-log-sheet`,
  create: `/api/v1/LogSheet/save-log-sheet`,
  update: `/api/v1/LogSheet/update-log-sheet`,
  delete: `/api/v1/LogSheet/delete-log-sheet`,
  lock_log_sheet: `/api/v1/LogSheet/lock-log-sheet`,
  unlock_log_sheet: `/api/v1/LogSheet/unlock-log-sheet`
};
