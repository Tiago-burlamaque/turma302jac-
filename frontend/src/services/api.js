import axios from 'axios'
export const api = axios.create({
    baseURL: "https://backend-jaco302.vercel.app"
})