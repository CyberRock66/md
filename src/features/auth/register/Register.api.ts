import { axiosInstance } from '@/utils/api.util';
import { IRegister } from './Register.model';

export const registerApi = (formData: IRegister) =>
  axiosInstance.post(`/users`, formData);
