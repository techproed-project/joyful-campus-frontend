
import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const getAdminsByPage = async (page=0, size=2, sort="name", type="asc") => {
    const resp = await axios.get(`${API_URL}/admin/getAll?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const createAdmin = async (payload) => {
    const resp = await axios.post(`${API_URL}/admin/save`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteAdmin = async (id) => {
    const resp = await axios.delete(`${API_URL}/admin/delete/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}