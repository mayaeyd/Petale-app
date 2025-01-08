import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/admin";

export const adminApi = {
  get: async (endpoint, id = null) => {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}${id ? `/${id}` : ""}`
    );
    return response.data;
  },
  post: async (endpoint, data) => {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  },
  put: async (endpoint, id, data) => {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
  },
  delete: async (endpoint, id) => {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response.data;
  },
  patch: async (endpoint, id, data) => {
    const response = await axios.patch(`${BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
  },
};
