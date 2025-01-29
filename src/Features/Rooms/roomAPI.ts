import axios from "axios";

const API_URL =
  "https://hotel-management-system-backend-yref.onrender.com/room/all";

// Fetch all bookings
export const fetchRooms = async () => {
  //   const token = store.getState().auth.token; // Get token from Redux store
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`, // Include token in the header
    },
  });
  return response.data;
};
