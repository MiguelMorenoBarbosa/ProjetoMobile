import axios from "axios";

export const api = axios.create({
    baseURL: "https://mmbadonis.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})