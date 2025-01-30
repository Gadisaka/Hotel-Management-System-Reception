import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../Features/Bookings/bookingSlice";
import roomsReducer from "../Features/Rooms/roomSlice";
import accountReducer from "../Features/Account/accountSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    // customers: customersReducer
    bookings: bookingsReducer,
    account: accountReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
