import { IUser } from '@/types/models';
import { axiosInstance } from '@/utils/api.util';
import { ILogin } from './Login.model';

export const loginApi = async (formData: ILogin): Promise<IUser> => {
  const { data } = await axiosInstance.post(`/users/login`, formData);

  return data;
};
