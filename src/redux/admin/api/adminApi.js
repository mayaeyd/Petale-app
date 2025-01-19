import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/admin";

const getAuthHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const adminApi = {
  get: async (endpoint, id = null, ids = null) => {
    let url = `${BASE_URL}/${endpoint}`;

    if (id) {
      url += `/${id}`;
    } else if (ids) {
      url += `?ids=${ids.join(",")}`;
    }

    const response = await axios.get(url, { headers: getAuthHeader() });
    return response.data;
  },
  post: async (endpoint, data) => {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: getAuthHeader(),
    });
    return response.data;
  },
  put: async (endpoint, id, data) => {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data, {
      headers: getAuthHeader(),
    });
    return response.data;
  },
  delete: async (endpoint, id) => {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  },
  patch: async (endpoint, id, data) => {
    const response = await axios.patch(`${BASE_URL}/${endpoint}/${id}`, data, {
      headers: getAuthHeader(),
    });
    return response.data;
  },
};
