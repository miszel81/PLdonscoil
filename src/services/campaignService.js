import http from "./httpService";
import { apiCampaigns } from "../config/endpoints";

const watchCampaign = apiCampaigns + "watch/";
const unWatchCampaign = apiCampaigns + "unwatch/";
const applyCampaign = apiCampaigns + "apply/";
const resignCampaign = apiCampaigns + "resign/";
const appliedCampaigns = apiCampaigns + "applied/";
const watchedCampaigns = apiCampaigns + "watched/";
const campaignDetails = apiCampaigns + "details/";
const supportCampaign = apiCampaigns + "support/";
const unSupportCampaign = apiCampaigns + "unsupport/";
const supportedCampaign = apiCampaigns + "supported/";
const supportedByAccount = apiCampaigns + "supportedby/";

export function supportProject(projectId, accountId, userId) {
  return http.post(supportCampaign + `${projectId}`, { accountId, userId });
}
export function unSupportProject(projectId, accountId, userId) {
  return http.post(unSupportCampaign + `${projectId}`, { accountId, userId });
}

export function getCampaignSupportes(projectId, accountId) {
  return http.post(supportedCampaign + `${projectId}`, { accountId });
}
// export function observeProject(projectId, accountId) {
//   return http.put(watchCampaign + `${projectId}`, { accountId });
// }
export function observeProject(projectId, user) {
  return http.put(watchCampaign + `${projectId}`, { user });
}
export function unObserveProject(projectId, userId) {
  return http.put(unWatchCampaign + `${projectId}`, { userId });
  // export function unObserveProject(projectId, accountId) {
  //   return http.put(unWatchCampaign + `${projectId}`, { accountId });
}
export function applyProject(projectId, accountId) {
  return http.put(applyCampaign + `${projectId}`, { accountId });
}
export function resignProject(projectId, accountId) {
  return http.put(resignCampaign + `${projectId}`, { accountId });
}
export function getCampaignObserve(projectId, userId) {
  return http.post(watchCampaign + `${projectId}`, { userId });
}
// export function getCampaignObserve(projectId, accountId) {
//   return http.post(watchCampaign + `${projectId}`, { accountId });
// }
export function getCampaignApply(projectId, accountId) {
  return http.post(applyCampaign + `${projectId}`, { accountId });
}
export function getAccountAppliedProjects(account) {
  return http.get(appliedCampaigns + account);
}

export function getAccountSupportedProjects(accountId) {
  return http.get(supportedByAccount + `${accountId}`);
}

export function getUserWatchedProjects(userId) {
  return http.get(watchedCampaigns + userId);
}
// export function getAccountWatchedProjects(account) {
//   return http.get(watchedCampaigns + account);
// }
export function getAccountCampaigns(account) {
  return http.get(apiCampaigns + account);
}
export function getCampaignDetails(projectId) {
  return http.get(campaignDetails + `${projectId}`);
}
