/*
  > Title: End Points of Operator Group
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-07-26
*/

export const OPERATOR_GROUP = {
  get_all: `/api/v1/OperatorGroup/get-operator-groups`,
  get_archive: `/api/v1/OperatorGroup/get-archive-operator-groups`,
  get_single: `/api/v1/OperatorGroup/get-operator-group`,
  create: `/api/v1/OperatorGroup/save-operator-group`,
  update: `/api/v1/OperatorGroup/update-operator-group`,
  delete: `/api/v1/OperatorGroup/delete-operator-group`,
  restore: `/api/v1/OperatorGroup/retrieve-operator-group`
};
