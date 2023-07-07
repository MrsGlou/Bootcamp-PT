import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { resendValidationCode } from "../services/API_user/user.service";
import useResendCode from "../hooks/useResendCode";

const ButtonResend = ({ setReloadPageError }) => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const { allUser, user } = useAuth();

  //Gestionamos el submit del formulario
  const handleReSend = async () => {
    //No hay formdata porque sacamos la info del allUser o localStorage
    const getEmailLocalStorage = () => {
      const local = localStorage.getItem("user");
      const parseUserLocal = JSON.parse(local);
      return parseUserLocal.email;
    };

    setSend(true);
    setRes(
      await resendValidationCode({
        email: localStorage.getItem("user")
          ? getEmailLocalStorage()
          : allUser?.data?.user?.email,
      })
    );

    setSend(false);
  };

  useEffect(() => {
    useResendCode(res, setReloadPageError, setRes);
  }, [res]);

  return (
    <button
      id="btnResend"
      className="btn"
      disabled={send}
      style={{ background: send ? "#49c1a388" : "#49c1a2" }}
      onClick={() => handleReSend()}
    >
      Resend Code
    </button>
  );
};

export default ButtonResend;
