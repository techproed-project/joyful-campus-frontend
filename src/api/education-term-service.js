
import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getEducationTermsByPage = async (page=0, size=20, sort="startDate", type="asc") => {
    const resp = await axios.get(`${API_URL}/educationTerms/search?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const getAllEducationTerms = async () => {
    const resp = await axios.get(`${API_URL}/educationTerms/getAll`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const createEducationTerm = async (payload) => {
    const resp = await axios.post(`${API_URL}/educationTerms`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteEducationTerm = async (id) => {
    const resp = await axios.delete(`${API_URL}/educationTerms/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}
