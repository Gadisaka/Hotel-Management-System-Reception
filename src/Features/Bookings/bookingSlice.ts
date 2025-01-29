import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBookings } from "./bookingAPI";

// Define the Booking type
interface Booking {
  id: string;
  customerId: string;
  roomId: string;
  startDate: string;
  endDate: string;
  payment: number;
  status: "COMPLETED" | "PENDING" | "CANCELLED" | "CONFIRMED";
  createdAt: string;
  updatedAt: string;
  roomNumber: number;
  customerName: string;
}

// Define the state
interface BookingsState {
  bookings: Booking[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  status: "idle",
  error: null,
};

// Create the async thunk
export const fetchBookingsThunk = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await fetchBookings();
    console.log(response);
    return response;
  }
);

// Create the slice
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
