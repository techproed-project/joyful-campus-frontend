
import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getLessonProgramsByPage = async (page=0, size=20, sort="day", type="asc") => {
    const resp = await axios.get(`${API_URL}/lessonPrograms/search?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const getAllLessonPrograms = async () => {
    const resp = await axios.get(`${API_URL}/lessonPrograms/getAll`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const getAllLessonProgramByStudent = async () => {
    const resp = await axios.get(`${API_URL}/lessonPrograms/getAllLessonProgramByStudent`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const createLessonProgram = async (payload) => {
    const resp = await axios.post(`${API_URL}/lessonPrograms/save`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteLessonProgram = async (id) => {
    const resp = await axios.delete(`${API_URL}/lessonPrograms/delete/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const getUnAssignedPrograms = async () => {
    const resp = await axios.get(`${API_URL}/lessonPrograms/getAllUnassigned`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}
