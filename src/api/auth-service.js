import axios from "axios"
import { config } from "../helpers/config"

const API_URL = config.api.baseUrl; // https://mycampusmates.com/app

export const login = async (payload) => {
    const resp = await axios.post(`${API_URL}/auth/login`, payload);
    const data = resp.data;
    return data;
}