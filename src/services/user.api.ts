import { IUser } from '@/types/models';
import { axiosServerInstance } from '@/utils/api.util';

export const userApi = async (token: string): Promise<IUser> => {
  const { data } = await axiosServerInstance(token).get(`/user`);

  return data;
};
