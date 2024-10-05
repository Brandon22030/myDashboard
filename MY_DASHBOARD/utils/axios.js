import Axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const axios = Axios.create({
  baseURL: api_url || "http://localhost:8080/api/auth/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else if (error.response.status === 403) {
      window.location.href = "/register";
    } else if (error.response.status === 404) {
      window.location.href = "/404";
    }
    return Promise.reject(error);
  }
);
export default axios;
