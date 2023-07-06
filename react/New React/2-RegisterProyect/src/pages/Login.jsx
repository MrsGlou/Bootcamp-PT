import { Link, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { loginUser } from "../services/API_user/user.service";
import { useAuth } from "../context/authContext";
import useLoginError from "../hooks/useLoginError";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [loginOk, setLoginOk] = useState(false);
  const { userLogin, setUser } = useAuth();

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  //Gestionan las respuestas
  useEffect(() => {
    setUser(() => null);
  }, []);

  useEffect(() => {
    useLoginError(res, setLoginOk, userLogin, setRes);
  }, [res]);

  //Estados de navecación
  if (loginOk) {
    if ((res.data.user.check = false)) {
      return <Navigate to="/validationcode" />;
    } else {
      return <Navigate to="/home" />;
    }
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Login</h1>
        <p>Welcome Back</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>

          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? <Spinner /> : "Login"}
            </button>
          </div>
        </form>
      </div>
      <footer>
        <p>
          Don`t have an account yet? <Link to="/register">Register Here</Link>
        </p>
      </footer>
    </>
  );
};

export default Login;
