import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useRegisterError = (res, setRegisterOk, setRes) => {
  // 200 --->  respuesta ok register ok
  if (res?.status == 200) {
    localStorage.setItem("data", JSON.stringify(res));
    setRegisterOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Welcome to my Page 💌",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
  //409 --> usuario registrado
  if (res?.status == 409) {
    localStorage.setItem("data", JSON.stringify(res));
    setRegisterOk(() => false);
    Swal.fire({
      icon: "error",
      text: "User already exist! ❎",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  //404 --> contraseña no esta en el formato correcto
  if (res?.response?.data?.includes("Validation Failed")) {
    Swal.fire({
      icon: "error",
      title: "Oops ❎",
      text: "Min 8 characters, 1 upper case, 1 lower case and a special character ❎",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //404 --> no se envia el correo
  if (
    res?.response?.status == 404 &&
    res?.response?.data?.confirmationCode.includes("error, resend code")
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops ❎",
      text: "Register ok, error to ressend code ❎",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //500 --> internal server error
  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval server error!❎ Please try again.",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};

export default useRegisterError;
