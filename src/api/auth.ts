import axios from 'axios';
import { ContestantModel, LoginDataRequest } from '../store/slices/auth/types';
import { logOut } from '../store/slices/auth/operations';
import store from '../store/store';

export const base_URL = 'https://test.showon.net';
export const instance = axios.create({
  baseURL: base_URL,
});

const token = {
  set(accessToken: string) {
    delete instance.defaults.headers.Authorization;
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    delete instance.defaults.headers.Authorization;
  },
};

export async function getAuthDataFromLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem('show_on.authData');

  if (dataFromLocalStorage) {
    return JSON.parse(dataFromLocalStorage);
  }
  return Promise.reject(Error);
}

const responseInterceptor = (response: any) => {
  if (response.data.success) {
    return response;
  }
  throw new Error(`${response.data.msg}`);
};

const errorInterceptor = async (error: any) => {
  if (error.response && error.response.status === 401) {
    await store.dispatch(logOut());
    window.location.href = '/login';
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(responseInterceptor, errorInterceptor);

export const axiosLogin = async (userData: ContestantModel) => {
  try {
    const { data } = await instance.post('/api/User/Login', userData);
    if (data.success) {
      const authData = {
        token: data.data.user.token,
        user: data.data.user,
        loginTime: Date.now(),
      };
      console.log(data);
      localStorage.setItem('showOn.authData', JSON.stringify(authData));
      token.set(data.data.user.token);
      return data;
    }
    throw new Error(data.msg);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const axiosLogout = async () => {
  // const { data } = await instance.post("/api/WebApp/Logout");
  localStorage.removeItem('showOn.authData');
  token.unset();
  return { isLoggedIn: false };
};

export const axiosRefreshUser = async () => {
  const authData = await getAuthDataFromLocalStorage();
  if (authData?.token) {
    token.set(authData.token);
    return authData;
  } else {
    token.unset();
  }
};

export const axiosDeleteAccount = async () => {
  const { data } = await instance.get('/api/User/DeleteUser');
  axiosLogout();
  console.log(data);
  return data;
};
