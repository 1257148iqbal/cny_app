export const TIME_SLOT = {
  get_all: `/api/v1/TimeSlot/get-timeslots`,
  get_all_by_operation_group: `/api/v1/TimeSlot/get-timeslots-by-operation-group`,
  get_by_operation_group_and_shift: `/api/v1/TimeSlot/get-timeslot-by-shift-and-operation-group`,
  get_archive: `/api/v1/TimeSlot/get-archive-timeslots`,
  get_single: `/api/v1/TimeSlot/get-timeslot`,
  get_currentTimeSlot: `/api/v1/TimeSlot/get-current-timeslot`,
  create: `/api/v1/TimeSlot/save-timeslot`,
  update: `/api/v1/TimeSlot/update-timeslot`,
  delete: `/api/v1/TimeSlot/delete-timeslot`,
  restore: `/api/v1/TimeSlot/retrieve-timeslot`
};
