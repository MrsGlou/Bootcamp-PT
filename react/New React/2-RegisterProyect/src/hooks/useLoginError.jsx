import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useLoginError = (res, setLoginOk, userLogin, setRes) => {
  //200 -> todo Ok
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      _id: res.data.user._id,
      image: res.data.user.image,
      validated: res.data.user.validated,
    };
    const dataString = JSON.stringify(dataCustom);
    userLogin(dataString);
    setLoginOk(() => true);
    Swal.fire({
      icon: "succes",
      title: "Welcome to my page",
      text: "Login Ok",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //404 -> contraseña incorrecta
  if (res?.response?.data?.includes("Invalid password")) {
    setRes(() => {});
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password or user incorrect ❎",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //404 -> usuario incorrecto
  if (res?.response?.data?.includes("User not found")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password or user incorrect ❎",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }

  //500 -> server error
  if (res?.response?.status == 500) {
    setRes(() => {});
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export default useLoginError;
