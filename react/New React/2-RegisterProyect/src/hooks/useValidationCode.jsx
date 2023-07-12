import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useValidationCode = (
  res,
  setDeleteUser,
  serValidationOk,
  setUser,
  setReloadPageError,
  setRes
) => {
  //200 -> testValidationOk: true
  if (res?.data?.testValidatedOk.toString() == "true") {
    //Revisamos que vengas del login con el localStorage
    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseCurrentUser = JSON.parse(currentUser);
      const customUser = {
        ...parseCurrentUser,
        check: true,
      };
      //Tengo que convertirlo en string para meterlo en el local
      const customUserString = JSON.stringify(customUser);
      setUser(() => customUser);
      localStorage.setItem("user", customUserString);
    }
    serValidationOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Ok correct code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //200 -> testValidationOk: false
  if (res?.data?.testValidatedOk.toString() == "false") {
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //200 -> usario borrado includes ("error delete user")
  if (res?.data?.delete?.includes("error delete user")) {
    Swal.fire({
      icon: "error",
      title: "No correct Code❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //200 -> usuario no borrado incluye ("ok delete user")
  if (res?.data?.delete?.includes("ok delete user")) {
    setDeleteUser(() => true);
    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "Your user is delete. Register again, please.",
      showConfirmButton: false,
      timer: 2500,
    });
    setRes(() => {});
  }

  //404-> User not found, no tenemos el email
  if (res?.response?.data?.includes("User not found")) {
    setReloadPageError(() => true);
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try login, please.",
      showConfirmButton: false,
      timer: 1500,
    });

    setRes(() => {});
  }

  //404 -> error message
  if (res?.response?.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "No delete user. Try again, please.",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }

  //500 -> interval server error
  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }
};

export default useValidationCode;
