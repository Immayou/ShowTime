import { FielsdOfActivityTypes, UserTypes } from '../../../enums/General';

export interface IUsersState {
  users: null | IUserData[];
  isLoading: boolean;
  error: null | string;
}

export interface IUserData {
  id: string;
  type: UserTypes;
  cover_url: string;
  description: string;
  name: string;
  fields_of_activity: FielsdOfActivityTypes[];
  banned: boolean;
}
