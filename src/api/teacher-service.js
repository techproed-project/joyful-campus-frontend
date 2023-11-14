import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getTeachersByPage = async (
  page = 0,
  size = 2,
  sort = "name",
  type = "asc"
) => {
  const resp = await axios.get(
    `${API_URL}/teachers/search?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const getAllTeachers = async () => {
  const resp = await axios.get(`${API_URL}/teachers/getAll`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const getTeacherById = async (id) => {
  const resp = await axios.get(`${API_URL}/teachers/getSavedTeacherById/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const createTeacher = async (payload) => {
  const resp = await axios.post(`${API_URL}/teachers/save`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const deleteTeacher = async (id) => {
  const resp = await axios.delete(`${API_URL}/teachers/delete/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const updateTeacher = async (payload) => {
  const resp = await axios.put(
    `${API_URL}/teachers/update/${payload.userId}`,
    payload,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const assignTeacherToProgram = async (payload) => {
  const resp = await axios.post(`${API_URL}/teachers/chooseLesson`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};
