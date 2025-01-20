export interface IError {
  errorMessage: string;
}

export interface Credentials {
  name: string;
  password: string;
}

export interface LoginData {
  id: string;
  name: string;
  token: string;
  role: string;
  valid_to: string;
}
export interface AuthState {
  isProdServerActive: boolean;
  baseProdUrl: string;
  user: string | null;
  token: string | null;
  bucket: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
