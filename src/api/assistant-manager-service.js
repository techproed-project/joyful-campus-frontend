
import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getAssistantManagersByPage = async (page=0, size=2, sort="name", type="asc") => {
    const resp = await axios.get(`${API_URL}/vicedean/search?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const createAssistantManager = async (payload) => {
    const resp = await axios.post(`${API_URL}/vicedean/save`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteAssistantManager = async (id) => {
    const resp = await axios.delete(`${API_URL}/vicedean/delete/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const updateAssistantManager = async (payload) => {
    const resp = await axios.put(`${API_URL}/vicedean/update/${payload.userId}`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}