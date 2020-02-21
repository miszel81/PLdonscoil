import http from "./httpService";
import { apiUrl, apiDashboard, apiSponsorProjects } from "../config/endpoints";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

const endPoint = apiUrl + "/sponsorProjects/";

const registerEndPoint = apiUrl + "/sponsors/";

const authEndpoint = apiUrl + "/sponsors/auth";

export function sponsorProjectUrl(id) {
  return `${endPoint}/${id}`;
}

export function registerSponsor(sponsor) {
  return http.post(registerEndPoint, {
    sponsorName: sponsor.sponsorName,
    sponsorWebsite: sponsor.sponsorWebsite,
    sponsorCity: sponsor.sponsorCity,
    sponsorPostalCode: sponsor.sponsorPostalCode,
    sponsorStreet: sponsor.sponsorStreet,
    sponsorCountry: sponsor.sponsorCountry,
    sponsorCounty: sponsor.sponsorCounty,
    sponsorPhone: sponsor.sponsorPhone,
    sponsorContactPersonEmail: sponsor.sponsorContactPersonEmail,
    sponsorContactPersonName: sponsor.sponsorContactPersonName,
    sponsorContactPersonPhone: sponsor.sponsorContactPersonPhone,
    sponsorPassword: sponsor.sponsorPassword,
    sponsorVAT: sponsor.sponsorVAT,
    sponsorCRO: sponsor.sponsorCRO
  });
}

export function loginSponsor(sponsorContactPersonEmail, sponsorPassword) {
  return http.post(authEndpoint, {
    sponsorContactPersonEmail,
    sponsorPassword
  });
}

export function getMyDashboard() {
  return http.get(apiDashboard);
}

export function getSponsor(id) {
  return http.get(registerEndPoint + `${id}`);
}

export function getAllSponsorsCampaigns() {
  return http.get(endPoint);
}

export function getSponsorCampaigns() {
  return http.get(apiSponsorProjects);
}

export function getSponsorProjectDetails(id) {
  return http.get(sponsorProjectUrl(id));
}

export function getLoggedSponsorId() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const decodedToken = jwtDecode(jwt);
    const id = decodedToken._id;
    return id;
  } catch (ex) {
    return null;
  }
}

export function saveSponsorProject(project) {
  // if (project._id) {
  //   const body = { ...project };
  //   delete body._id;
  //   return http.put(sponsorProjectUrl(project._id), body);
  // }
  // console.log(project);
  return http.post(endPoint, project);
}
