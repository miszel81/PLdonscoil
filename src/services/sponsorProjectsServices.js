import http from "./httpService";
import { apiSearchSponsorProjects } from "../config/endpoints";

export function getAllSponsorsProjectsfForSearchBox() {
  return http.get(apiSearchSponsorProjects);
}
