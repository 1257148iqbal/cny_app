import { accountReducer } from './accountReducer';
import { authReducer } from './authRootReducer';
import { reportingReducers } from './reportingReducer';

export default {
  ...authReducer,
  ...accountReducer,
  ...reportingReducers
};
