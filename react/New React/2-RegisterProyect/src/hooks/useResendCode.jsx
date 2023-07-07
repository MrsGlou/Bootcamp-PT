import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useResendCode = (res, setReloadPageError, setRes) => {
  // 200 -> todo ok
  if (res?.status == 200) {
    Swal.fire({
      icon: "success",
      title: "Ok send email with your code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // 404 -> Se envia el usuario al login cuando no existe
  if (res?.response?.data?.includes("User not found")) {
    setReloadPageError(() => true);
    Swal.fire({
      icon: "success",
      title: "Ok send email with your code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
    setRes(() => {});
  }

  //500 -> Server error y 404 general
  if (res?.response?.status == 500 || res?.response?.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Interval Server Error! Don't send email ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
