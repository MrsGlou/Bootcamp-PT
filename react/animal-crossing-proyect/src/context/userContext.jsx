import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem('user');
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const login = (user) => {
    localStorage.setItem('user', user);
    setUser(user);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <userContext.Provider value={{ user, login, setUser, logout }}>
      {children}
    </userContext.Provider>
  );
};
