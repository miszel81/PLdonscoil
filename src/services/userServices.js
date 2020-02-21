import http from "./httpService";
import { apiAuth, apiUser } from "../config/endpoints";

const apiAccountUsers = apiUser + "accounts/";

export function login(email, password) {
  return http.post(apiAuth, { email, password }); //,{ withCredentials: true }
}

export function getUserDetails(id) {
  return http.get(apiUser + `${id}`);
}
export function editUser(id, user) {
  return http.put(apiUser + `${id}`, user);
}
export function getAccountUsers(account) {
  return http.get(apiAccountUsers + `${account}`);
}
export function addUser(user) {
  return http.post(apiUser, user);
}
export function deleteUser(id) {
  return http.delete(apiUser + `${id}`);
}
