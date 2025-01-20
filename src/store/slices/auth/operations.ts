import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosLogin, axiosLogout, axiosRefreshUser } from '../../../api/auth';
import { IError, Credentials, LoginData } from './types';

export const login = createAsyncThunk<
  LoginData,
  Credentials,
  {
    rejectValue: IError;
  }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await axiosLogin(credentials);
    if (data.success) {
      const authData = {
        token: data.data.token,
        name: data.data.name,
        loginTime: Date.now(),
      };
      localStorage.setItem('7-element.authData', JSON.stringify(authData));
      return data.data as LoginData;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const logOut = createAsyncThunk<
  { isLoggedIn: false },
  void,
  {
    rejectValue: IError;
  }
>('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosLogout();
    return { isLoggedIn: false };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const refreshUser = createAsyncThunk<
  LoginData,
  void,
  { rejectValue: IError }
>('auth/refresh', async (_, thunkAPI) => {
  try {
    const data = await axiosRefreshUser();
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});
