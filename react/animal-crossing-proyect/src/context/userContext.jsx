import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem('user');
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const login = (user, token) => {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
    setUser(user);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const initialState = {
    token: null,
    user: '',
    favourites: [],
  };

  return (
    <userContext.Provider value={{ initialState, user, login, setUser, logout }}>
      {children}
    </userContext.Provider>
  );
};
