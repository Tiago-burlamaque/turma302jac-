import axios from 'axios'
export const api = axios.create({
    baseURL: "https://nozomi.proxy.rlwy.net:37751"
})