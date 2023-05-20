/**
 * Title: Operator Duty log END POINTS
 * Description:
 * Author: Nasir Ahmed
 * Date: 04-June-2022
 * Modified: 04-June-2022
 **/

export const OPERATOR_DUTY_LOG_API = {
  get_all: `/api/v1/OperatorDutyLog/get-operator-duty-logs`,
  get_active: `/api/v1/OperatorDutyLog/get-active-operator-duty-logs`,
  get_history: `/api/v1/OperatorDutyLog/get-history-operator-duty-logs`,
  get_archive: `/api/v1/OperatorDutyLog/get-archive-operator-duty-logs`,
  get_single: `/api/v1/OperatorDutyLog/get-operator-duty-log`,
  create: `/api/v1/OperatorDutyLog/save-operator-duty-log`,
  update: `/api/v1/OperatorDutyLog/update-operator-duty-log`,
  delete: `/api/v1/OperatorDutyLog/delete-operator-duty-log`,
  restore: `/api/v1/OperatorDutyLog/retrieve-operator-duty-log`,
  lock: `/api/v1/OperatorDutyLog/lock-operator-duty-log`,
  unlock: `/api/v1/OperatorDutyLog/unlock-operator-duty-log`
};
