export interface IError {
  errorMessage: string;
}

export interface Credentials {
  device_id: string;
  lang: string;
  os_type: number;
  id: string;
  user_id: string;
}

export interface LoginDataRequest {
  id: string;
  deviceId: string;
  accountType: string;
  nickname: string;
  email: string;
}

export interface ContestantModel {
  id: string;
  deviceId: string;
  accountType: number;
  nickname: string;
  email: string;
  name: string;
  description: string;
  profileUrl: string;
  fieldOfArtId: string;
  links: string[];
}

export interface IProfile {
  id: string;
  userId: string;
  nickname: string;
  name: string;
  description: string;
  profileUrl: string;
  coverUrl: string;
  links?: string;
  // accountType: AccountType;
  // medias: [MediaCompact];
  // followers: [ProfileFollewed];
}

export interface IUserWithToken {
  token: string;
  user: string;
}
export interface AuthState {
  isProdServerActive: boolean;
  profile: IProfile | null;
  user: IUserWithToken | null;
  bucket: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
