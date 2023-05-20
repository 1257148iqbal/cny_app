/*
  > Title: End Points of Lab Unit
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-08-26
*/

export const LAB_UNIT = {
  get_all: `/api/v1/LabUnit/get-lab-units`,
  get_all_active: `/api/v1/LabUnit/get-active-lab-units`,
  get_archive: `/api/v1/LabUnit/get-archive-lab-units`,
  get_lab_unit_testSample: `/api/v1/LabUnit/get-active-lab-units-with-test-sample`,
  get_single: `/api/v1/LabUnit/get-lab-unit`,
  create: `/api/v1/LabUnit/save-lab-unit`,
  update: `/api/v1/LabUnit/update-lab-unit`,
  delete: `/api/v1/LabUnit/delete-lab-unit`,
  restore: `/api/v1/LabUnit/retrieve-lab-unit`
};
