/* eslint-disable no-case-declarations */

import { FILE_PROGRESS } from '../../action-types';

// **  Initial State
const initialState = {
  progressValue: 0
};

const fileProgress = (state = initialState, action) => {
  switch (action.type) {
    case FILE_PROGRESS:
      return { ...state, progressValue: action.progressValue };
    default:
      return state;
  }
};

export default fileProgress;
