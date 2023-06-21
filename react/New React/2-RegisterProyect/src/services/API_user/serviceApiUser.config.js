import axios from "axios";
import { updateToken } from "../../utils/updateToken";

//Cabeceras que vamos a tener para poder hacer la llamada
const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${updateToken()}`,
};

export const APIuser = axios.create({
  baseURL: `http://localhost:8082/api/v1`,
  headers: APIHeaders,
  timeout: 600000,
});
