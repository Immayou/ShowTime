import { combineReducers } from 'redux';
import { authReducer } from './slices/auth/authSlice';
import modalsSlice from './slices/modals/modalsSlice';
import notificationsSlice from './slices/notifications/notificationsSlice';
import { categoriesReducer } from './slices/categories/categoriesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  modals: modalsSlice,
  notification: notificationsSlice,
  categories: categoriesReducer,
});

export default rootReducer;
