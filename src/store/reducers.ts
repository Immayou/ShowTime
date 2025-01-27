import { combineReducers } from 'redux';
import { authReducer } from './slices/auth/authSlice';
import modalsSlice from './slices/modals/modalsSlice';
import notificationsSlice from './slices/notifications/notificationsSlice';
import { usersReducer } from './slices/users/usersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalsSlice,
  notification: notificationsSlice,
  users: usersReducer,
});

export default rootReducer;
