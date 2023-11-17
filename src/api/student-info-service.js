import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getStudentInfoByPageForTeacher = async (
  page = 0,
  size = 2,
  sort = "educationTermId",
  type = "asc"
) => {
  const resp = await axios.get(
    `${API_URL}/studentInfo/getAllForTeacher?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};


export const getStudentInfoByPageForStudent = async (
  page = 0,
  size = 2,
  sort = "educationTermId",
  type = "asc"
) => {
  const resp = await axios.get(
    `${API_URL}/studentInfo/getAllByStudent?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};


export const createStudentInfo = async (payload) => {
  const resp = await axios.post(`${API_URL}/studentInfo/save`, payload, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const deleteStudentInfo = async (id) => {
  const resp = await axios.delete(`${API_URL}/studentInfo/delete/${id}`, {
    headers: getAuthHeader(),
  });
  const data = resp.data;
  return data;
};

export const updateStudentInfo = async (payload) => {
  const resp = await axios.put(
    `${API_URL}/studentInfo/update/${payload.id}`,
    payload,
    {
      headers: getAuthHeader(),
    }
  );
  const data = resp.data;
  return data;
};
