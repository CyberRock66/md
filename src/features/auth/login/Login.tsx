'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { Button, Input } from '@/components/UI';
import { getFirstErrorMessageClientValidation } from '@/utils/common.utils';
import { useRouter } from 'next/navigation';
import { ILogin } from './Login.model';
import { loginFormSchema } from './Login.schema';
import { loginApi } from './Login.api';

export const Login = () => {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: (formData: ILogin) => loginApi(formData),
  });
  const {
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onBlur',
    defaultValues: {
      user: {
        email: '',
        password: '',
      },
    },
  });
  const onSubmit: SubmitHandler<ILogin> = async (formData) => {
    await loginMutation
      .mutateAsync({ ...formData })
      .then((res) => {
        Cookies.set('token', res.user.token, { expires: 320 });
        router.replace('/');
        router.refresh();
        reset();
      })
      .catch((e) => {
        const errorsValue = e.response.data.errors;

        if (errorsValue.password) {
          setError('user', {
            type: 'server',
            message: `password ${errorsValue.password}`,
          });
        }

        if (errorsValue.email) {
          setError('user', {
            type: 'server',
            message: `email ${errorsValue.email}`,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.user && errors.user.type === 'server' && (
        <ul className="error-messages">
          <li>{errors.user.message}</li>
        </ul>
      )}

      {errors.user && errors.user.type !== 'server' && (
        <ul className="error-messages">
          <li>{getFirstErrorMessageClientValidation(errors.user)}</li>
        </ul>
      )}

      <Input
        control={control}
        name="user.email"
        disabled={loginMutation.isLoading}
        placeholder="Email"
        type="email"
      />
      <Input
        control={control}
        name="user.password"
        disabled={loginMutation.isLoading}
        placeholder="Password"
        type="password"
      />
      <Button typeBtn="submit" disabled={loginMutation.isLoading}>
        Sign in
      </Button>
    </form>
  );
};
