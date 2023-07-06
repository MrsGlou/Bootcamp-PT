import "./Register.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../services/API_user/user.service";
import useRegisterError from "../hooks/useRegisterError";
import { useAuth } from "../context/authContext";

import Uploadfile from "../components/Uploadfile";
import Spinner from "../components/Spinner";

const Register = () => {
  const { allUser, setAllUser, bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [registerOk, setRegisterOk] = useState(false);

  //Se encarga de la información que tenemos en el formulario
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    //Dependiendo de si se sube foto o no vamos a hacer una cosa u otra
    if (inputFile.length !== 0) {
      const custonFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(custonFormData));
      setSend(false);

      //llamammos al servicio
    } else {
      const custonFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(custonFormData));
      setSend(false);

      //llamamoos al servicio
    }
  };

  useEffect(() => {
    useRegisterError(res, setRegisterOk, setRes, setAllUser);
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);

  //Navegación
  if (registerOk) {
    console.log("Ya puedes navegar");
    return <Navigate to="/verifyCode" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
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

          <Uploadfile />

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? <Spinner /> : "Register"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </footer>
    </>
  );
};

export default Register;
