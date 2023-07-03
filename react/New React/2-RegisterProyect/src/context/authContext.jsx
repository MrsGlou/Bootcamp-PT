import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    const parseUser = JSON.parse(data);

    if (data) {
      return parseUser;
    } else {
      return null;
    }
  });

  //All User solo se utiliza para guardar la respuesta cuando hay registro
  const [allUser, setAllUser] = useState({
    data: {
      confirmationCode: "",
      user: {
        password: "",
        email: "",
      },
    },
  });
  const navigate = useNavigate();

  //--------- LOGIN ---------
  const userLogin = (data) => {
    localStorage.setItem("user", data);
    const parseUser = JSON.parse(data);
    setUser(() => parseUser);
  };

  //--------- LOGOUT ---------
  const userLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  //-------- PUENTE PARA CUANDO TENGAMOS ASYNCRONIA -------
  const brigeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");
        break;
      default:
        break;
    }
  };

  //UseMemo memoriza el return de la funcion
  const value = useMemo(
    () => ({
      user,
      setUser,
      userLogin,
      userLogout,
      allUser,
      setAllUser,
      brigeData,
    }),
    [user, allUser]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
