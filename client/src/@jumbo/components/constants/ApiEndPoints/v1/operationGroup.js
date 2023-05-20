/*
  > Title: End Points of Operation Group
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-27
*/

export const OPERATION_GROUP = {
  get_all: `/api/v1/OperationGroup/get-operation-groups`,
  get_active: `/api/v1/OperationGroup/get-active-operation-groups`,
  get_archive: `/api/v1/OperationGroup/get-archive-operation-groups`,
  get_single: `/api/v1/OperationGroup/get-operation-group`,
  create: `/api/v1/OperationGroup/save-operation-group`,
  update: `/api/v1/OperationGroup/update-operation-group`,
  delete: `/api/v1/OperationGroup/delete-operation-group`,
  restore: `/api/v1/OperationGroup/retrieve-operation-group`
};
