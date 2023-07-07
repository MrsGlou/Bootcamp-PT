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
import ButtonResend from "../components/ButtonResend";

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
      return <Navigate to="/home" />;
    }
  }

  if (deleteUser) {
    return <Navigate to="/register" />;
  }

  if (reloadPageError) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Verify your code 👌</h1>
        <p>Write the code sent to your email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Registration code
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button>
          </div>
        </form>
        <div className="btn_container">
          <ButtonResend setReloadPageError={setReloadPageError} />
        </div>
        <p className="bottom-text">
          <small>
            If the code is not correct ❌, your user will be deleted from the
            database and you will need to register again.{" "}
          </small>
        </p>
      </div>
    </>
  );
};

export default ValidationCode;
