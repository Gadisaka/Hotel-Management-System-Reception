import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRooms } from "./roomAPI";
import { RoomData } from "../../components/rooms/roomData";

// Define the state
interface RoomsState {
  rooms: RoomData[];
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
