import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logOut, refreshUser } from './operations';
import { AuthState, LoginDataRequest, IError, IUserWithToken } from './types';
import { TEST } from '../../../api/aws_config';
import { PROD } from '../../../api/aws_config';

const initialState: AuthState = {
  isProdServerActive: false,
  user: null,
  profile: null,
  bucket: '',
  isLoggedIn: true,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleProdTestServer(state, action) {
      state.isProdServerActive = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    logout(state) {
      localStorage.removeItem('showOn.authData');
      state.user = null;
      state.profile = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<IUserWithToken>) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        login.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<IUserWithToken>) => {
          state.isLoggedIn = true;
          state.user = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        refreshUser.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        logOut.fulfilled,
        (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
          state.isLoggedIn = false;
          state.user = null;
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const { reducer: authReducer } = authSlice;
export const { logout, toggleProdTestServer } = authSlice.actions;
