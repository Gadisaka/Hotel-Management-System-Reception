import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage

import bookingsReducer from "../Features/Bookings/bookingSlice";
import roomsReducer from "../Features/Rooms/roomSlice";
import accountReducer from "../Features/Account/accountSlice";
import customersReducer from "../Features/Customers/customerSlice";

const rootReducer = combineReducers({
  rooms: roomsReducer,
  bookings: bookingsReducer,
  account: accountReducer,
  customers: customersReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
