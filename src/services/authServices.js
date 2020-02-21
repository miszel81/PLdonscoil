import http from "./httpService";
import { apiAuth } from "../config/endpoints";
import CryptoJS from "crypto-js";
const apiReset = apiAuth + "/reset/";
const apiChange = apiAuth + "/change/";
const apiAdminChange = apiAuth + "/adminchange/";
const apiCheck = apiAuth + "/checkToken/";
const apiDelete = apiAuth + "/deleteToken/";
require("dotenv").config();

const payloadKey = "session";

function getUser() {
  const key = process.env.REACT_APP_SESSION_KEY;
  // console.log("key:", key);
  try {
    const data = localStorage.getItem(payloadKey);
    const decrypted = CryptoJS.AES.decrypt(data, key);
    // KEY ZMIENIC NA 16 ZNAKOW, ZAMKNAC W ENV VARIABLE
    const user = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return user;
  } catch (ex) {
    return null;
  }
}

function resetPass(email) {
  return http.post(apiReset, { email });
}

function newPass(token, password) {
  return http.post(apiReset + `${token}`, { password });
}

function changePass(_id, password, newPassword) {
  return http.post(apiChange, { _id, password, newPassword });
}
function changePassForAdmin(_id, newPassword) {
  return http.post(apiAdminChange, { _id, newPassword });
}

function checkToken() {
  return http.get(apiCheck);
}

function deleteToken() {
  return http.get(apiDelete);
}

export {
  getUser,
  resetPass,
  newPass,
  changePass,
  changePassForAdmin,
  checkToken,
  deleteToken
};

// if (localStorage.getItem("_id") === null) {
//   return null;
// } else {
// const user = {
//   _id: localStorage.getItem("_id"),
//   account: localStorage.getItem("account"),
//   role: localStorage.getItem("role"),
//   type: localStorage.getItem("type")
// };

// const jwt = localStorage.getItem(tokenKey);
// return jwtDecode(jwt);

// return http.get(apiUser);

// return user;
// }

// opcja getUser ze state

// async function getUser() {
//   const user = await http.get(apiUser);
//   console.log("getUser", user.data);
//   if (user.data === "No token provided") {
//     return null;
//   } else {
//     return user.data;
//   }
// }
