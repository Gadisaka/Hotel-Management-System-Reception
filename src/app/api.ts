import axios from "axios";
import { store } from "./store";
import { createAction } from "@reduxjs/toolkit";

const api = axios.create({
  baseURL: "https://hotel-management-system-backend-yref.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const clearToken = createAction("auth/clearToken");

      store.dispatch(clearToken());
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
