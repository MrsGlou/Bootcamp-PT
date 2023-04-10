import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../context/userContext';

const Login = () => {
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (values) => {
    login(values.user, values.token);
  };

  const { login } = useContext(userContext);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="username">
        <span>Username:</span>
        <input
          {...register('user', { required: true, minLength: 2 })}
          id="user"
          name="user"
          type="text"
        />
      </label>

      <label htmlFor="password">
        <span>Departure from:</span>
        <input
          {...register('token', { required: true, minLength: 4 })}
          id="token"
          name="token"
          type="text"
        />
      </label>

      <button type="submit">Apply</button>
    </form>
  );
};

export default Login;
