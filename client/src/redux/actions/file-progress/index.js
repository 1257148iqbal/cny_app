import { FILE_PROGRESS } from '../../action-types';

export const fileProgressAction = value => dispatch => {
  dispatch({
    type: FILE_PROGRESS,
    progressValue: value
  });
};
