import axios from "axios";

const API_URL =
  "https://hotel-management-system-backend-yref.onrender.com/room";

// Fetch all bookings
export const fetchRooms = async () => {
  //   const token = store.getState().auth.token; // Get token from Redux store
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/all`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include token in the header
    },
  });
  return response.data;
};

export const changeStatus = async (id: string, status: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `${API_URL}/status/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
