import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosLogin, axiosLogout, axiosRefreshUser } from '../../../api/auth';
import {
  IError,
  LoginDataRequest,
  IUserWithToken,
  ContestantModel,
} from './types';

export const login = createAsyncThunk<
  IUserWithToken,
  ContestantModel,
  {
    rejectValue: IError;
  }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await axiosLogin(credentials);
    if (data.success) {
      console.log('login', data.data);
      return data.data as IUserWithToken;
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

export const refreshUser = createAsyncThunk<any, void, { rejectValue: IError }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const data = await axiosRefreshUser();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);

// export const deleteAccount = createAsyncThunk<
//   void,
//   void,
//   {
//     rejectValue: IError;
//   }
// >('delete/account', async (_, thunkAPI) => {
//   try {
//     const data = await axiosDeleteAccount();
//     if (data.success) {
//       return;
//     } else {
//       throw new Error('Something went wrong ,' + data.msg);
//     }
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue({ errorMessage: error.message });
//   }
// });
