/*
  > Title: End Points of Test Sample
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-08-26
*/

export const TEST_SAMPLE = {
  get_all: `/api/v1/TestSample/get-test-samples`,
  get_archive: `/api/v1/TestSample/get-archive-test-samples`,
  get_active: `/api/v1/TestSample/get-active-test-samples`,
  get_single: `/api/v1/TestSample/get-test-sample`,
  get_by_lab_unit: `/api/v1/TestSample/get-test-samples-by-lab-unit`,
  create: `/api/v1/TestSample/save-test-sample`,
  update: `/api/v1/TestSample/update-test-sample`,
  delete: `/api/v1/TestSample/delete-test-sample`,
  restore: `/api/v1/TestSample/retrieve-test-sample`
};
