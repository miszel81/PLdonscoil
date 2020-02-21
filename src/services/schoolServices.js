import http from "./httpService";
import { apiAccount, apiProjects } from "../config/endpoints";

const apiEndpoint = apiAccount;

export function getSchoolDetails(schoolId) {
  return http.get(apiEndpoint + `${schoolId}`);
}

export function getSchoolProjects(schoolId) {
  return http.get(apiProjects + `account/${schoolId}`);
}

// to ponizej to skopiowanie i wszystko stare

// const apiEndpoint = apiUrl + "/schools";
// const apiEndpointProjects = apiUrl + "/schoolprojects";

// // Endpoint for schools with no Roll Number
// const apiEndPointNoRollNumber = apiUrl + "/schools/no-rollNumber";

// // Auth endpoint for app.use("/api/schools/auth", schoolAuth);
// const authEndPoint = apiUrl + "/schools/auth";

// function schoolUrl(id) {
//   return `${apiEndpoint}/${id}`;
// }
// poprawione requesty

// stare, skopiowane requesty.
// function schoolProjectUrl(id) {
//   return `${apiEndpointProjects}/${id}`;
// }

// export function loginSchool(
//   schoolContactPersonEmail,
//   schoolContactPersonPassword
// ) {
//   return http.post(authEndPoint, {
//     schoolContactPersonEmail,
//     schoolContactPersonPassword
//   });
// }

// export function getMyDashboard() {
//   return http.get(apiDashboard);
// }

// export function schoolProfileUrl(schoolName) {
//   return `${apiUrl}/schoolProfile/${schoolName}`;
// }

// export function getSchoolProfile(schoolName) {
//   return http.get(schoolProfileUrl(schoolName));
// }

// export function getAllSchools() {
//   return http.get(apiEndpoint);
// }

// export function getSchoolProjectDetails(id) {
//   return http.get(schoolProjectUrl(id));
// }
// export function getAllSchoolsProjects() {
//   return http.get(apiEndpointProjects);
// }
// export function getSchoolProjects() {
//   return http.get(apiEndpoint + "/myschool/projects");
// }

// export function getAllSchoolfForSearchBox() {
//   return http.get(apiUrl + "/schools/getAllSchoolfForSearchBox");
// }

// export function registerSchool(school) {
//   return http.post(apiEndPointNoRollNumber, {
//     schoolRollNumber: school.schoolRollNumber,
//     schoolName: school.schoolName,
//     schoolProfileName: school.schoolProfileName,
//     schoolProfile: school.schoolProfile,
//     schoolStreet: school.schoolStreet,
//     schoolCity: school.schoolCity,
//     schoolCounty: school.schoolCounty,
//     schoolPostalCode: school.schoolPostalCode,
//     schoolWebSite: school.schoolWebSite,
//     schoolPhone: school.schoolPhone,
//     schoolDescription: school.schoolDescription,
//     schoolContactPersonName: school.schoolContactPersonName,
//     schoolContactPersonPhone: school.schoolContactPersonPhone,
//     schoolContactPersonEmail: school.schoolContactPersonEmail,
//     schoolContactPersonPassword: school.schoolContactPersonPassword
//   });
// }

// export function getLoggedSchoolId() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     const decodedToken = jwtDecode(jwt);
//     const id = decodedToken._id;
//     return id;
//   } catch (ex) {
//     return null;
//   }
// }
// export function saveSchoolProject(project) {
//   // if (project._id) {
//   //   const body = { ...project };
//   //   delete body._id;
//   //   return http.put(sponsorProjectUrl(project._id), body);
//   // }
//   console.log(project);
//   return http.post(apiEndpointProjects, project);
// }
