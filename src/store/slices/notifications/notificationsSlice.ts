import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotificationProps, INotificationState } from './type';

const initialState: INotificationState = {
  message: null,
  acceptionValue: null,
  isVisible: false,
  isAcceptionNeeded: false,
  errorType: false,
};

const notificationsSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationAcception(state, action: PayloadAction<boolean>) {
      state.acceptionValue = action.payload;
    },
    showErrorNotification(state, action: PayloadAction<INotificationProps>) {
      state.message = action.payload.message;
      state.isAcceptionNeeded = action.payload.isAcceptionNeeded;
      state.isVisible = true;
      state.errorType = true;
    },
    showSimpleNotification(state, action: PayloadAction<INotificationProps>) {
      state.message = action.payload.message;
      state.isAcceptionNeeded = action.payload.isAcceptionNeeded;
      state.isVisible = true;
      state.errorType = false;
    },
    hideNotification(state) {
      state.message = null;
      state.isAcceptionNeeded = false;
      state.isVisible = false;
      state.errorType = false;
    },
    anulateNotificationData(state) {
      state.message = null;
      state.isAcceptionNeeded = false;
      state.acceptionValue = null;
      state.isVisible = false;
      state.errorType = false;
    },
  },
});

export const {
  setNotificationAcception,
  showErrorNotification,
  showSimpleNotification,
  hideNotification,
  anulateNotificationData,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;
