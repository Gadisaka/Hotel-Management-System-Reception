import axios from "axios";
import { customersData } from "../../components/customers/customersData";

const API_URL =
  "https://hotel-management-system-backend-yref.onrender.com/customer";

export const fetchCustomers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchCustomerById = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createCustomer = async (data: customersData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`${API_URL}/new`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateCustomer = async (data: customersData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}/${data.id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteCustomer = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
