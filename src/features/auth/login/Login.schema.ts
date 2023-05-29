import * as yup from 'yup';

export const loginFormSchema = yup.object({
  user: yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email field is required'),
    password: yup.string().required('password field is required'),
  }),
});
