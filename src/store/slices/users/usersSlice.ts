import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData, IUsersState } from './types';
import { IError } from '../auth/types';
import { getUsers } from './operations';
import { FielsdOfActivityTypes, UserTypes } from '../../../enums/General';
import coverTest from '../../../sprite/animal-7024072_640.png';

const usersTest = [
  {
    id: '1',
    type: UserTypes.ARTIST,
    cover_url: coverTest,
    description: '111',
    name: 'Danny',
    fields_of_activity: [FielsdOfActivityTypes.DANCING],
    banned: false,
  },
  {
    id: '2',
    type: UserTypes.REGULAR,
    cover_url: coverTest,
    description: '111',
    name: 'Molly',
    fields_of_activity: [FielsdOfActivityTypes.SINGING],
    banned: false,
  },
  {
    id: '3',
    type: UserTypes.ARTIST,
    cover_url: coverTest,
    description: '111',
    name: 'Oscar',
    fields_of_activity: [FielsdOfActivityTypes.DANCING],
    banned: false,
  },
  {
    id: '4',
    type: UserTypes.REGULAR,
    cover_url: coverTest,
    description: '111',
    name: 'Lily',
    fields_of_activity: [
      FielsdOfActivityTypes.SINGING,
      FielsdOfActivityTypes.DANCING,
    ],
    banned: false,
  },
  {
    id: '5',
    type: UserTypes.ARTIST,
    cover_url: coverTest,
    description: '111',
    name: 'Emmy',
    fields_of_activity: [FielsdOfActivityTypes.DANCING],
    banned: false,
  },
  {
    id: '6',
    type: UserTypes.REGULAR,
    cover_url: coverTest,
    description: '111',
    name: 'Anny',
    fields_of_activity: [FielsdOfActivityTypes.DANCING],
    banned: false,
  },
  {
    id: '7',
    type: UserTypes.REGULAR,
    cover_url: coverTest,
    description: '111',
    name: 'Pole',
    fields_of_activity: [
      FielsdOfActivityTypes.SINGING,
      FielsdOfActivityTypes.DANCING,
    ],
    banned: false,
  },
  {
    id: '8',
    type: UserTypes.ARTIST,
    cover_url: coverTest,
    description: '111',
    name: 'Karoline',
    fields_of_activity: [FielsdOfActivityTypes.SINGING],
    banned: true,
  },
  {
    id: '9',
    type: UserTypes.REGULAR,
    cover_url: coverTest,
    description: '111',
    name: 'Emmily',
    fields_of_activity: [FielsdOfActivityTypes.DANCING],
    banned: true,
  },
];

const initialState: IUsersState = {
  users: usersTest,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<IUserData[]>) => {
          state.users = action.payload;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getUsers.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      );
  },
});

export const { reducer: usersReducer } = usersSlice;
// export const {
//   setActiveCategory,
//   setActiveSubCategory,
//   setCategoryToEdit,
//   setItemToEdit,
//   setSubCategoryToEdit,
// } = categoriesSlice.actions;
