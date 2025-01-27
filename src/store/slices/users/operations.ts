import { createAsyncThunk } from '@reduxjs/toolkit';
import { IError } from '../auth/types';
import { IUserData } from './types';
import { axiosGetUsers } from '../../../api/users';

export const getUsers = createAsyncThunk<
  IUserData[],
  void,
  {
    rejectValue: IError;
  }
>('get/users', async (_, thunkAPI) => {
  try {
    const data = await axiosGetUsers();
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});
