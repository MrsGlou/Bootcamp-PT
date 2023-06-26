import Spinner from "../components/Spinner";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { validationCode } from "../services/API_user/user.service";

const ValidationCode = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await validationCode(formData));
    setSend(false);
  };

  useEffect(() => {
    console.log(res);
  }, [res]);

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
