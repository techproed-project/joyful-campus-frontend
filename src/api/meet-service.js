import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getAllMeetsByPageForAdvisorTeacher = async (
  page = 0,
  size = 2
) => {
  const resp = await axios.get(
    `${API_URL}/meet/getAllMeetByAdvisorAsPage?page=${page}&size=${size}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const getAllMeetsForStudent = async () => {
  const resp = await axios.get(`${API_URL}/meet/getAllMeetByStudent`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const createMeet = async (payload) => {
  const resp = await axios.post(`${API_URL}/meet/save`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const deleteMeet = async (id) => {
  const resp = await axios.delete(`${API_URL}/meet/delete/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const updateMeet = async (payload) => {
  const resp = await axios.put(
    `${API_URL}/meet/update/${payload.id}`,
    payload,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};
