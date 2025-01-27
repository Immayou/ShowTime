import axios from 'axios';

export interface IApiResponse {
  msg: string;
  success: boolean;
  data: null | any;
}

export const PROD = 'https://prod.7element.net/api';
export const TEST = 'https://test.7element.net/api';
export const TEST2 = 'http://134.249.167.199:5001/api';
let USE_PROD = false;

export const toggleServer = async (action: boolean) => {
  USE_PROD = action;
  console.log(`Switched to ${USE_PROD ? 'Prod' : 'Test'} server.`);
  updateAxiosBaseUrl();
};

export const getApiMainUrl = () => (USE_PROD ? PROD : TEST);

export const apiMainUrl = axios.create({
  baseURL: getApiMainUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const updateAxiosBaseUrl = () => {
  apiMainUrl.defaults.baseURL = getApiMainUrl();
};

export const initAws = () => {
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

  if (!accessKeyId || !secretAccessKey) {
    throw new Error('AWS облікові дані не встановлені');
  }
};
