import http from "./httpService";
import {
  apiProjects,
  apiAccountProjects,
  apiAccountProjectsForOwners,
  apiHand
} from "../config/endpoints";

const apiAplication = apiProjects + "apply/";
const apiGetAplication = apiProjects + "application/";
const apiActivate = apiProjects + "activate/";

export function saveProject(project) {
  return http.post(apiProjects, project);
}

export function saveApplication(application) {
  return http.post(apiAplication, application);
}
export function getApplication(projectId, accountId) {
  return http.post(apiGetAplication, { projectId, accountId });
}
export function deleteApplication(id) {
  return http.delete(apiGetAplication + `${id}`);
}

export function getApplicants(projectId) {
  return http.get(apiProjects + `apply/${projectId}`);
}

export function updateProject(project, projectId) {
  return http.put(apiProjects + projectId, project);
}
export function deleteProject(projectId) {
  return http.delete(apiProjects + projectId);
}
export function getProjects(projectType) {
  return http.get(apiProjects + projectType);
}
export function getProjectDetails(projectId) {
  return http.get(apiProjects + projectId);
}
export function getAccountProjects(account) {
  return http.get(apiAccountProjects + account);
}

export function getAccountProjectsForOwners(account) {
  return http.get(apiAccountProjectsForOwners + account);
}
export function getCountyProjets(county, projectType) {
  return http.post(apiProjects + "county/" + county, { projectType });
}

export function getTrendingProjects(projectType) {
  if (projectType === "School")
    return http.get(apiProjects + "trending/School");
  if (projectType === "Sponsor")
    return http.get(apiProjects + "trending/Sponsor");
}
export function giveHand(data) {
  return http.post(apiHand, data);
}
export function getHands(projectId) {
  return http.get(apiHand + projectId);
}

export function activateProject(projectId) {
  return http.get(apiActivate + projectId);
}
