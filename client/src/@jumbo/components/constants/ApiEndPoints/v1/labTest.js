export const LAB_TEST = {
  get_all: `/api/v1/LabReport/get-lab-reports`,
  get_active: `/api/v1/LabReport/get-active-lab-reports`,
  get_history: `/api/v1/LabReport/get-history-lab-reports`,
  get_archive: `/api/v1/LabReport/get-archive-lab-reports`,
  get_single: `/api/v1/LabReport/get-lab-report`,
  check_duplicate_lab_report: `/api/v1/LabReport/check-duplicate-lab-report`,
  check_alc_or_murban: `/api/v1/LabReport/check-alc-or-murban`,
  create: `/api/v1/LabReport/save-lab-report`,
  update: `/api/v1/LabReport/update-lab-report`,
  lock: `/api/v1/LabReport/lock-lab-report`,
  unlock: `/api/v1/LabReport/unlock-lab-report`,
  delete: `/api/v1/LabReport/delete-lab-report`,
  restore: `/api/v1/LabReport/retrieve-lab-report`
};
