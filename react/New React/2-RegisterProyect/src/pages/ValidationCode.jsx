import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  validationCode,
  resendValidationCode,
} from "../services/API_user/user.service";
import { useAuth } from "../context/authContext";
import { all } from "axios";
import useValidationCode from "../hooks/useValidationCode";
import useAutoLogin from "../hooks/useAutoLogin";
import { Navigate } from "react-router-dom";

const ValidationCode = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [validationOk, setValidationOk] = useState(false);
  const [reloadPageError, setReloadPageError] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const { allUser, userLogin, setUser, user } = useAuth();
  const { register, handleSubmit } = useForm();

  //Gestiona los submit de los formularios
  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      // Usuario que viene del registro
      //-> AllUser solo disponible cuando se realiza el registro previo, sino esta vacio.
      const custonFormData = {
        email: allUser.data.user.email,
        validationCode: parseInt(formData.ValidationCode),
      };

      //Llamamos al servicio
      setSend(true);
      setRes(await validationCode(custonFormData));
      setSend(false);
    } else {
      //Usuario viene del login
      const custonFormData = {
        email: user.email,
        validationCode: parseInt(formData.ValidationCode),
      };
      setSend(true);
      setRes(await validationCode(custonFormData));
      setSend(false);
    }
  };

  //Gestionamos los errores
  useEffect(() => {
    useValidationCode(
      res,
      setDeleteUser,
      setValidationOk,
      setUser,
      setReloadPageError,
      setRes
    );
  }, [res]);

  //Estados de navegación
  if (validationOk) {
    if (!localStorage.getItem("user")) {
      //autologin
      setValidationOk(() => false);
      useAutoLogin(allUser, userLogin, setValidationOk);
    } else {
      return <Navigate to="/register" />;
    }
  }

  if (deleteUser) {
    return <Navigate to="/login" />;
  }

  if (reloadPageError) {
    return <Navigate to="/login" />;
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

          <div className="validatedcode_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Validation Code
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
    </>
  );
};

export default ValidationCode;
