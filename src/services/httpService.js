import axios from "axios";
// import logger from "./logger";
import { toast } from "react-toastify";
import Raven from "raven-js";

// Sprawdza czy jest sesja, jesli tak to wysyla w hedersach, zeby back sprawdzil czy jest i sesja i token
const session = localStorage.getItem("session");
if (session) {
  axios.defaults.headers.common["session"] = localStorage.getItem("session");
}

// Pozwala odczytywac cookies przychodzace z backendu.
axios.defaults.withCredentials = true;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Raven.captureException(error);
    toast.error("Unexpected error! Try again later!");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
