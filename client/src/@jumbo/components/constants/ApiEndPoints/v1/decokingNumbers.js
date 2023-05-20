/*
     Title: Decoking Number API
     Description: Decoking Number API
     Author: Iqbal Hossain
     Date: 27-February-2022
     Modified: 27-February-2022
*/

export const DECOKING_NUMBERS = {
  get_all: `/api/v1/DecokingNumber/get-decoking-numbers`,
  get_archive: `/api/v1/DecokingNumber/get-archive-decoking-numbers`,
  get_active: `/api/v1/DecokingNumber/get-active-decoking-numbers`,
  get_single: `/api/v1/DecokingNumber/get-decoking-number`,
  create: `/api/v1/DecokingNumber/save-decoking-number`,
  update: `/api/v1/DecokingNumber/update-decoking-number`,
  delete: `/api/v1/DecokingNumber/delete-decoking-number`,
  restore: `/api/v1/DecokingNumber/retrieve-decoking-number`
};
