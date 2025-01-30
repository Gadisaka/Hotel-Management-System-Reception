import axios from "axios";

const API_URL =
  "https://hotel-management-system-backend-yref.onrender.com/employee/user";

// Fetch account by ID
export const fetchAccountById = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include token in the header
    },
  });
  return response.data;
};
