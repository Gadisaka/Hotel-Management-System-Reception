import axios from "axios";
import { BookingData } from "@/components/bookings/bookingsData";

const API_URL =
  "https://hotel-management-system-backend-yref.onrender.com/booking";

export const fetchBookings = async () => {
  //   const token = store.getState().auth.token;
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.bookings;
};

export const createBooking = async (newBooking: BookingData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`${API_URL}/new`, newBooking, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const changeBookingStatus = async (id: string, status: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(
    `${API_URL}/update/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
