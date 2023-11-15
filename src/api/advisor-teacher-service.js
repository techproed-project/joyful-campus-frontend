import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app


export const getAllAdvisorTeachers = async () => {
  const resp = await axios.get(`${API_URL}/advisorTeacher/getAll`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};
