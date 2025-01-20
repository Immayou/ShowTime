import axios from 'axios';
import { Credentials } from '../store/slices/auth/types';
import { logOut } from '../store/slices/auth/operations';
import store from '../store/store';

export const REACT_APP_ADMIN_API_URL = 'https://webapp.7element.net';
export const REACT_APP_TEST_API_URL = 'https://authtest.7element.net';
// 'http://134.249.167.199:5005'
// 'https://prod.7element.net/api'
// 'https://webapp.7element.net'
// 'http://3.79.159.166:5015'
export const instance = axios.create({
  // baseURL: process.env.REACT_APP_ADMIN_API_URL,
  baseURL: REACT_APP_ADMIN_API_URL,
});

export const presetsInstance = axios.create({
  // baseURL: process.env.REACT_APP_TEST_API_URL,
  baseURL: REACT_APP_TEST_API_URL,
});

const token = {
  set(accessToken: string) {
    delete instance.defaults.headers.Authorization;
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    delete presetsInstance.defaults.headers.Authorization;
    presetsInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    delete instance.defaults.headers.Authorization;
    delete presetsInstance.defaults.headers.Authorization;
  },
};

export async function getAuthDataFromLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem('7-element.authData');

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
presetsInstance.interceptors.response.use(
  responseInterceptor,
  errorInterceptor
);

export const axiosLogin = async (userData: Credentials) => {
  try {
    const { data } = await instance.post('/api/WebApp/Login', userData);
    if (data.success) {
      token.set(data.data.token);
      return data;
    }
    throw new Error(data.msg);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const axiosLogout = async () => {
  // const { data } = await instance.post("/api/WebApp/Logout");
  localStorage.removeItem('7-element.authData');
  token.unset();
  return { isLoggedIn: false };
};

export const axiosRefreshUser = async () => {
  const authData = await getAuthDataFromLocalStorage();
  if (authData && authData.token) {
    token.set(authData.token);
    return authData;
  } else {
    token.unset();
  }
};
