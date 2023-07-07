import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useValidationCode = (
  res,
  setDeleteUser,
  serValidationOk,
  setUser,
  setReloadPageError,
  setRes
) => {
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
};

export default useValidationCode;
