import axios from "axios";

// Set the base URL for the API requests
// Use environment variables to determine the base URL
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";
const api = axios.create({
    baseURL: BASE_URL,



});

export default api;