import { Box } from "@mui/material";
import * as React from "react";
import RecentBookings from "./recentBookings";
import Rooms from "./rooms";
import ExpiredBookings from "./expiredBookings";
import { bookings } from "../bookings/bookingsData";

const Overview: React.FC = () => {
  return (
    <Box className="flex w-full flex-col pb-3 lg:flex-row gap-3 justify-between">
      <Box className=" w-full lg:w-[60%]">
        <RecentBookings bookings={bookings} />
      </Box>
      <Box className="lg:w-[40%] flex flex-col gap-5 w-full max-h-fit">
        <Rooms />
        <ExpiredBookings data={bookings} />
      </Box>
    </Box>
  );
};

export default Overview;
