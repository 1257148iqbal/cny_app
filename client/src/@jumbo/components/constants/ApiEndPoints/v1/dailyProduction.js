/*
  > Title: End Points of Daily Production
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-28-09
*/

export const DAILY_PRODUCTION = {
  get_all: `/api/v1/DailyProduction/get-daily-productions`,
  get_archive: `/api/v1/DailyProduction/get-archive-daily-productions`,
  get_active: `/api/v1/DailyProduction/get-active-daily-productions`,
  get_history: `/api/v1/DailyProduction/get-history-daily-productions`,
  get_single: `/api/v1/DailyProduction/get-daily-production`,
  create: `/api/v1/DailyProduction/save-daily-production`,
  update: `/api/v1/DailyProduction/update-daily-production`,
  delete: `/api/v1/DailyProduction/delete-daily-production`,
  restore: `/api/v1/DailyProduction/retrieve-daily-production`,
  lock: `/api/v1/DailyProduction/lock-daily-production`,
  unlock: `/api/v1/DailyProduction/unlock-daily-production`
};
