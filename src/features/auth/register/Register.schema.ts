import * as yup from 'yup';
import { IRegister } from './Register.model';

export const registerFormSchema = yup.object<IRegister>({
  user: yup.object().shape({
    username: yup.string().required('Username field is required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email field is required'),
    password: yup
      .string()
      .max(30, 'Password must be 30 characters or less')
      .required('Password field is required'),
  }),
});
