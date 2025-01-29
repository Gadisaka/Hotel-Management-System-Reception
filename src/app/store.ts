import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../Features/Bookings/bookingSlice";
import authReducer from "../Features/Auth/authSlice";
import roomsReducer from "../Features/Rooms/roomSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    // customers: customersReducer
    bookings: bookingsReducer,
    auth: authReducer,
    // accounts: accountsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
