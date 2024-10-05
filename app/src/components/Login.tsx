import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import { useLoginMutation } from '@services/api';
import { selectUserAuth } from '@features/authentication/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Credentials } from '@apptypes';

export const Login = () => {
  const { isAuthenticated } = useAppSelector(selectUserAuth);
  const [authStatus, setAuthStatus] = useState(isAuthenticated);
  const dispatch = useAppDispatch();

  const [login, { isError, isLoading, isSuccess, data }] = useLoginMutation();

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await login(data);
    setAuthStatus(true);
  };

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<Credentials>();

  return (
    <div>
      {!authStatus && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('username', { required: true })} />
          <input {...register('password', { required: true })} />
          {errors?.username && <p>This field is required</p>}
          <button type="submit">Login</button>
        </form>
      )}
      {authStatus && (
        <span>hello world</span>
      )}
    </div>
  );

};

