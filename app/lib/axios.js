import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://teeketee.vercel.app/api",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
  withCredentials: true, 
});

export default axiosInstance;
