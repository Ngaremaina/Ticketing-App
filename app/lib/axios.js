import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.MONGO_URI || "http://localhost:3000/api", // Fallback base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosInstance;
