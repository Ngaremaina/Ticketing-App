import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.MONGO_URI || "https://teeketee.vercel.app/api", // Fallback base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosInstance;
