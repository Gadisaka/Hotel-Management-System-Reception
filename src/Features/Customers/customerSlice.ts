import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customersData } from "../../components/customers/customersData";
import { fetchCustomers, createCustomer } from "./customerAPI";

interface CustomerState {
  customers: customersData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  status: "idle",
  error: null,
};

export const fetchCustomersThunk = createAsyncThunk(
  "customers/fetchCustomers",
  async () => {
    const response = await fetchCustomers();

    return response;
  }
);

export const createCustomerThunk = createAsyncThunk(
  "customers/createCustomer",
  async (newCustomer: customersData) => {
    const response = await createCustomer(newCustomer);
    return response;
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    // setCustomers: (state, action) => {
    //     state.customers = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customers = action.payload;
      })
      .addCase(fetchCustomersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch customers";
      });
  },
});

export default customerSlice.reducer;
