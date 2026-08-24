import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const baseUrl = import.meta.env.VITE_API_URL;

//axios instance creation
export const api = axios.create({
  baseUrl: baseUrl,
  headers: { Authorization: `Bearer ${accessToken}` },
});

//axios error handling
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

export default api;
