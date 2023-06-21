import { updateToken } from "../../utils/updateToken";
import { APIuser } from "./serviceApiUser.config";

//SIEMPRE HACERLO DE ESTA MANERA
//Es asincrona porque llamamos a internet para su ejecución
export const registerUser = async (formData) => {
  //Le indicamos la ruta relativa y solo tenemos un sitio en el que tener que cambiarla
  return APIuser.post("/user/register", formData, {
    //Metemos el header para la foto
    headers: { "Content-Type": "multipart/from-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};
