import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getStudentsByPage = async (
  page = 0,
  size = 2,
  sort = "name",
  type = "asc"
) => {
  const resp = await axios.get(
    `${API_URL}/students/search?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const getAllStudentsForAdvisor = async () => {
  const resp = await axios.get(`${API_URL}/students/getAllByAdvisor`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const createStudent = async (payload) => {
  const resp = await axios.post(`${API_URL}/students/save`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const deleteStudent = async (id) => {
  const resp = await axios.delete(`${API_URL}/students/delete/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const updateStudent = async (payload) => {
  const resp = await axios.put(
    `${API_URL}/students/update/${payload.id}`,
    payload,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};

export const chooseLesson = async (payload) => {
  const resp = await axios.post(`${API_URL}/students/chooseLesson`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};
