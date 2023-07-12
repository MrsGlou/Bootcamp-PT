import "./ForgotPassword.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPassword } from "../services/API_user/user.service";
import useForgotPassword from "../hooks/useForgotPassword";

const ForgotPassword = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const { handleSubmit, register } = useForm();
  const [forgotOk, setForgotOk] = useState(false);

  const formSubmit = async (fromData) => {
    setSend(true);
    setRes(await forgotPassword(fromData));
    setSend(false);
  };

  useEffect(() => {
    useForgotPassword(res, setRes, setForgotOk);
  }, [res]);

  if (forgotOk) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Change your password 💱</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Change password
            </button>
          </div>

          <p className="bottom-text">
            <small>Enter your email to send you the new password 💌</small>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
