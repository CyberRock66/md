'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Button, Input } from '@/components/UI';
import { getFirstErrorMessageClientValidation } from '@/utils/common.utils';
import { IRegister } from './Register.model';
import { registerFormSchema } from './Register.schema';
import { registerApi } from './Register.api';

export const Register = () => {
  const registerMutation = useMutation({
    mutationFn: (formData: IRegister) => registerApi(formData),
  });
  const {
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(registerFormSchema),
    mode: 'onBlur',
    defaultValues: {
      user: {
        username: '',
        email: '',
        password: '',
      },
    },
  });
  const onSubmit: SubmitHandler<IRegister> = async (formData) => {
    await registerMutation
      .mutateAsync({ ...formData })
      .then(() => reset())
      .catch((e) => {
        const errorsValue = e.response.data.errors;

        if (errorsValue.username) {
          setError('user', {
            type: 'server',
            message: `username ${errorsValue.username}`,
          });
        }

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
        name="user.username"
        disabled={registerMutation.isLoading}
        placeholder="Username"
        type="text"
      />
      <Input
        control={control}
        name="user.email"
        disabled={registerMutation.isLoading}
        placeholder="Email"
        type="email"
      />
      <Input
        control={control}
        name="user.password"
        disabled={registerMutation.isLoading}
        placeholder="Password"
        type="password"
      />
      <Button typeBtn="submit" disabled={registerMutation.isLoading}>
        Sign up
      </Button>
    </form>
  );
};
