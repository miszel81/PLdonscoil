import http from "./httpService";
import { apiAccount } from "../config/endpoints";

export function getAccount(id) {
  // console.log(apiAccount);
  return http.get(apiAccount + id);
}

export function editAccount(id, data) {
  return http.put(apiAccount + id, data);
}

export function getSchools() {
  return http.get(apiAccount + "schools");
}

// export function createAccount(account) {
//   return http.post(apiAccount, {
//     accountName: account.accountName,
//     type: account.type,
//     croRoll: account.croRoll,
//     bankAccountNumber: account.bankAccountNumber,
//     description: account.description,
//     website: account.website,
//     imgUrl: account.imgUrl,
//     street: account.street,
//     city: account.city,
//     county: account.county,
//     contactEmail: account.contactEmail,
//     firstName: account.firstName,
//     lastName: account.lastName,
//     title: account.title,
//     email: account.email,
//     phone: account.phone,
//     password: account.password
//   });
// }
export function createAccount(account) {
  return http.post(apiAccount, account);
}

export function deleteAccount() {
  console.log("account deleted");
}
