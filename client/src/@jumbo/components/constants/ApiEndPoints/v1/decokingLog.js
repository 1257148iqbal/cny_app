/*
  > Title: End Points of DecokingLog Log Sheet
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-09
*/

export const DECOKING_LOG = {
  get_active: `/api/v1/DecokingLog/get-active-decoking-logs`,
  get_history: `/api/v1/DecokingLog/get-history-decoking-logs`,
  get_archive: `/api/v1/DecokingLog/get-archive-decoking-logs`,
  get_single: `/api/v1/DecokingLog/get-decoking-log`,
  create: `/api/v1/DecokingLog/save-decoking-log`,
  update: `/api/v1/DecokingLog/update-decoking-log`,
  lock: `/api/v1/DecokingLog/lock-decoking-log`,
  unlock: `/api/v1/DecokingLog/unlock-decoking-log`,
  delete: `/api/v1/DecokingLog/delete-decoking-log`,
  restore: `/api/v1/DecokingLog/retrieve-decoking-log`
};
