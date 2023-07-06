import { APIuser } from "./serviceApiUser.config";
import { updateToken } from "../../utils/updateToken";

//SIEMPRE HACERLO DE ESTA MANERA
//Es asincrona porque llamamos a internet para su ejecución
//---------- REGISTER  ----------
export const registerUser = async (formData) => {
  //Le indicamos la ruta relativa y solo tenemos un sitio en el que tener que cambiarla
  return APIuser.post("/user/register", formData, {
    //Metemos el header para la foto
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//----------  lOGIN ----------
export const loginUser = async (formData) => {
  return APIuser.post("/user/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//---------- VALIDATION CODE ----------
export const validationCode = async (formData) => {
  return APIuser.post("/user/validated", formData)
    .then((res) => res)
    .catch((error) => error);
};

//---------- FORGOT PASSWORD ----------
export const forgotPassword = async (formData) => {
  return APIuser.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//---------- CHANGE PASSWORD ----------
export const changePassword = async (formData) => {
  return APIuser.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//---------- UPDATE ----------
export const updateUser = async (formData) => {
  return APIuser.patch("/users/update/update", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//-------- DELETE -----------
export const deleteUser = async () => {
  return APIuser.delete("/users/", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
};

//---------- RESEND CODE -----------
export const resendValidationCode = async (formData) => {
  console.log(formData);
  return APIuser.post("/users/resend", formData)
    .then((res) => res)
    .catch((error) => error);
};
