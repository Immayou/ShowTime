import { apiMainUrl } from './aws_config';

export const axiosGetUsers = async () => {
  try {
    const result = await apiMainUrl.get('/Users');
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
