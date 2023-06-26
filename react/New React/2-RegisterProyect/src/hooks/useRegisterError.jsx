import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useRegisterError = (res, setRegisterOk) => {
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
  }

  //404 --> contraseña no esta en el formato correcto
  // correo ya existe

  //404 --> no se envia el correo
  //500 --> internal server error
};

export default useRegisterError;
