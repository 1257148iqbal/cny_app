/*
  > Title: End points of Switch Log
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-08-04
*/

export const SWITCH_LOG = {
  get_all: `/api/v1/SwitchLog/get-switch-logs`,
  get_archive: `/api/v1/SwitchLog/get-archive-switch-logs`,
  get_single: `/api/v1/SwitchLog/get-switch-log`,
  create: `/api/v1/SwitchLog/save-switch-log`,
  update: `/api/v1/SwitchLog/update-switch-log`,
  delete: `/api/v1/SwitchLog/delete-switch-log`,
  get_active: `/api/v1/SwitchLog/get-active-switch-logs`,
  get_history: `/api/v1/SwitchLog/get-history-switch-logs`,
  lock_switch_log: `/api/v1/SwitchLog/lock-switch-log`,
  unlock_switch_log: `/api/v1/SwitchLog/unlock-switch-log`,
  check_duplicate_switch_log: `/api/v1/SwitchLog/check-duplicate-switch-log`
};
