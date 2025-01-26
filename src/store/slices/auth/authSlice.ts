import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logOut, refreshUser } from './operations';
import { AuthState, LoginData, IError } from './types';
import { TEST } from '../../../api/aws_config';
import { PROD } from '../../../api/aws_config';

const initialState: AuthState = {
  isProdServerActive: false,
  baseProdUrl: TEST,
  user: null,
  token: null,
  bucket: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleProdTestServer(state, action) {
      state.isProdServerActive = action.payload;
      state.baseProdUrl = action.payload ? PROD : TEST;
      state.isLoading = false;
      state.error = null;
    },
    loginTest(state) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    logout(state) {
      localStorage.removeItem('7-element.authData');
      state.user = null;
      state.token = null;
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
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginData>) => {
        state.user = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
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
        (state, action: PayloadAction<LoginData>) => {
          state.isLoggedIn = true;
          state.user = action.payload.name;
          state.token = action.payload.token;
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
          state.token = null;
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const { reducer: authReducer } = authSlice;
export const { loginTest, logout, toggleProdTestServer } = authSlice.actions;
