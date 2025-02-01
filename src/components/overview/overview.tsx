import { Box } from "@mui/material";
import * as React from "react";
import RecentBookings from "./recentBookings";
import Rooms from "./rooms";
import ExpiredBookings from "./expiredBookings";
import TotalIncome from "./totalIncome";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchBookingsThunk } from "@/Features/Bookings/bookingSlice";
import { fetchRoomsThunk } from "@/Features/Rooms/roomSlice";
import { fetchCustomersThunk } from "@/Features/Customers/customerSlice";

const Overview: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings } = useSelector((state: RootState) => state.bookings);

  React.useEffect(() => {
    dispatch(fetchBookingsThunk());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchRoomsThunk());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchCustomersThunk());
  }, [dispatch]);


  return (
    <Box className="flex w-[95%] lg:w-full flex-col h-full pb-3 lg:flex-row gap-3 justify-between ">
      <Box className=" w-full flex flex-col gap-5 lg:w-[60%]">
        <ExpiredBookings data={bookings} />
        <RecentBookings bookings={bookings} />
      </Box>
      <Box className="lg:w-[40%] flex flex-col gap-5 w-full h-[500px] ">
        <Rooms />
        <TotalIncome data={bookings} />
      </Box>
    </Box>
  );
};

export default Overview;
