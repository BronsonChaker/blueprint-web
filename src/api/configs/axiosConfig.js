import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

//axios instance creation
export const api = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

//axios error handling
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(undefined, errorHandler);

export default api;
