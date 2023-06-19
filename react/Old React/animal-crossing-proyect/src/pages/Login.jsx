import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../context/userContext';

import './Login.css';

const Login = () => {
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (values) => {
    login(values.user);
    const person = { user: values.user, from: values.place, token: true, favorites: [] };
    localStorage.setItem('currentUser', values.user);
    localStorage.setItem(`${values.user}`, JSON.stringify(person));
    localStorage.setItem('user', values.user);
    localStorage.setItem('from', values.place);
  };

  const { login } = useContext(userContext);

  return (
    <form className="userForm" onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="username">
        <span>Username:</span>
        <input
          {...register('user', { required: true, minLength: 2 })}
          id="user"
          name="user"
          type="text"
        />
      </label>

      <label htmlFor="from">
        <span>Departure from:</span>
        <input
          {...register('from', { required: true, minLength: 4 })}
          id="from"
          name="from"
          type="text"
        />
      </label>

      <button type="submit">Apply</button>
    </form>
  );
};

export default Login;
