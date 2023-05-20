/**
 * Title: End Points of Shift Report
 * Description:
 * Author: Nasir Ahmed
 * Date: 26-December-2021
 * Modified: 26-December-2021
 **/

export const SHIFT_REPORT = {
  get_active: `/api/v1/ShiftReport/get-active-shift-reports`,
  get_history: `/api/v1/ShiftReport/get-history-shift-reports`,
  get_archive: `/api/v1/ShiftReport/get-archive-shift-reports`,
  get_single: `/api/v1/ShiftReport/get-shift-report`,
  create: `/api/v1/ShiftReport/save-shift-report`,
  update: `/api/v1/ShiftReport/update-shift-report`,
  lock: `/api/v1/ShiftReport/lock-shift-report`,
  unlock: `/api/v1/ShiftReport/unlock-shift-report`,
  delete: `/api/v1/ShiftReport/delete-shift-report`,
  retrieve: `/api/v1/ShiftReport/retrieve-shift-report`
};
