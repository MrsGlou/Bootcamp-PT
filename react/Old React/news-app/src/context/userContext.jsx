import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export const ContexProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem("user");
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const login = (user) => {
    localStorage.setItem("user", user);
    setUser(user);
    navigate("/news");
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
  };
  return (
    <userContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </userContext.Provider>
  );
};
