/*
  > Title: End Points of Daily parameter
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-11
*/

export const DECOKING_PARAMETERS = {
  get_all: `/api/v1/Parameter/get-parameters`,
  get_parameters_by_operation_group_id: `/api/v1/Parameter/get-parameters-by-operation-group`,
  get_parameters_by_operation_group: `/api/v1/Parameter/get-parameters-by-operation-group`,
  get_archive: `/api/v1/Parameter/get-archive-parameters`,
  get_active: `/api/v1/Parameter/get-active-parameters`,
  get_single: `/api/v1/Parameter/get-parameter`,
  create: `/api/v1/Parameter/save-parameter`,
  update: `/api/v1/Parameter/update-parameter`,
  delete: `/api/v1/Parameter/delete-parameter`,
  restore: `/api/v1/Parameter/retrieve-parameter`
};
