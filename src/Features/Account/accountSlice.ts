import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAccountById } from "./accountAPI";

// Define the Account type
export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  sex: "MALE" | "FEMALE";
  password?: string;
  salary: number;
  role: "ADMIN" | "RECEPTIONIST";
  createdAt: string;
  updatedAt: string;
  phone: string;
  birthDate?: string;
  username?: string;
}

// Define the state
interface AccountState {
  account: Account | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AccountState = {
  account: null,
  status: "idle",
  error: null,
};

// Create the async thunk
export const fetchAccountDetailsThunk = createAsyncThunk(
  "account/fetchAccountDetails",
  async (id: string) => {
    const response = await fetchAccountById(id);
    console.log("res", response[0]);
    return response[0];
  }
);

//example of how to use the setAccount reducer
// import { setAccount } from "./accountSlice";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
// // Example account object
// const account = {
//   id: "1",
//   firstName: "John",
//   lastName: "Doe",
//   image: "https://example.com/image
//   .jpg",
//   sex: "MALE",
//   salary: 50000,
//   role: "ADMIN",
//   createdAt: "2023-01-01T00:00:00Z",
//   updatedAt: "2023-01-01T00:00:00Z",
//   phone: "123-456-7890",
//   birthDate: "1990-01-01",
//   username: "johndoe",
// };
// dispatch(setAccount(account));

// Create the slice
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountDetailsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccountDetailsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.account = action.payload;
      })
      .addCase(fetchAccountDetailsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch account details";
      });
  },
});

export default accountSlice.reducer;
