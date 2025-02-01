import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBooking, fetchBookings } from "./bookingAPI";
import { BookingData } from "@/components/bookings/bookingsData";

interface BookingsState {
  bookings: BookingData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  status: "idle",
  error: null,
};

export const fetchBookingsThunk = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await fetchBookings();
    console.log(response);
    return response;
  }
);

export const createBookingThunk = createAsyncThunk(
  "bookings/createBooking",
  async (newBooking: BookingData) => {
    const response = await createBooking(newBooking);
    return response;
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookingsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload;
      })
      .addCase(fetchBookingsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch bookings";
      });
  },
});

export default bookingsSlice.reducer;
