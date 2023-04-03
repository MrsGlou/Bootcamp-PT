import { createContext } from 'react';
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
    navigate('/news');
  };

  return (
    <userContext.Provider value={{ user, login, setUser }}>
      {children}
    </userContext.Provider>
  );
};
