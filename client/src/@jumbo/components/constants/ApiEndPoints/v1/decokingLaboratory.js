/*
  > Title: End Points of Decoking Labratory Result 
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-14
*/

export const DECOKING_LABORATORY_RESULT = {
  get_active: `/api/v1/DecokingLabratoryResult/get-active-decoking-labratory-result`,
  get_history: `/api/v1/DecokingLabratoryResult/get-history-decoking-labratory-result`,
  get_archive: `/api/v1/DecokingLabratoryResult/get-archive-decoking-labratory-result`,
  get_single: `/api/v1/DecokingLabratoryResult/get-decoking-labratory`,
  get_last: `/api/v1/DecokingLabratoryResult/get-last-decoking-labratory`,
  create: `/api/v1/DecokingLabratoryResult/save-decoking-labratory-result`,
  update: `/api/v1/DecokingLabratoryResult/update-decoking-labratory-result`,
  lock: `/api/v1/DecokingLabratoryResult/lock-decoking-labratory-result`,
  unlock: `/api/v1/DecokingLabratoryResult/unlock-decoking-labratory-result`,
  delete: `/api/v1/DecokingLabratoryResult/delete-decoking-labratory-result`,
  restore: `/api/v1/DecokingLabratoryResult/retrieve-decoking-labratory-result`
};
