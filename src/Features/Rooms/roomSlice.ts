import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRooms } from "./roomAPI";

// Define the Room type
interface Room {
  id: string;
  roomNumber: number;
  floor: number;
  type: "SINGLE" | "DOUBLE" | "TRIPLE" | "VIP";
  price: number;
  status: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";
  createdAt: string;
  updatedAt: string;
}

// Define the state
interface RoomsState {
  rooms: Room[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RoomsState = {
  rooms: [],
  status: "idle",
  error: null,
};

// Create the async thunk
export const fetchRoomsThunk = createAsyncThunk(
  "rooms/fetchRooms",
  async () => {
    const response = await fetchRooms();
    console.log(response);
    return response;
  }
);

// Create the slice
const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRoomsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = action.payload;
      })
      .addCase(fetchRoomsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch rooms";
      });
  },
});

export default roomsSlice.reducer;
