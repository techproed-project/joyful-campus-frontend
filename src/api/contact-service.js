import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl;

export const getMessagesByPage = async (page=0, size=2, sort="date", type="desc") => {
    const resp = await axios.get(`${API_URL}/contactMessages/getAll?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const createMessage = async (payload) => {
    const resp = await axios.post(`${API_URL}/contactMessages/save`, payload);
    const data = resp.data;
    return data;
}