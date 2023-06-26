import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  if (!localStorage.getItem("user")) return <Navigate to="/login" />;

  return children;
};

export default Protected;
