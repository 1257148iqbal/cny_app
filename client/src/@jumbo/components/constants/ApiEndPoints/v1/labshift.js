/*
  > Title: End Points of Lab Shift
  > Description: 
  > Author: Nasir Ahmed
  > Date: 2021-08-31
*/

export const LAB_SHIFT = {
  get_all: `/api/v1/LabShift/get-lab-shifts`,
  get_archive: `/api/v1/LabShift/get-archive-lab-shifts`,
  get_active: `/api/v1/LabShift/get-active-lab-shifts`,
  get_single: `/api/v1/LabShift/get-lab-shift`,
  get_current_shift: `/api/v1/LabShift/get-current-lab-shift`,
  create: `/api/v1/LabShift/save-lab-shift`,
  update: `/api/v1/LabShift/update-lab-shift`,
  delete: `/api/v1/LabShift/delete-lab-shift`,
  restore: `/api/v1/LabShift/retrieve-lab-shift`
};
