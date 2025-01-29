import React from "react";
import { Box, Typography } from "@mui/material";
import FilterAndSearch from "@/components/bookings/FilterAndSearch";
import BookingTable from "@/components/bookings/bookingsTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { fetchBookingsThunk } from "@/Features/Bookings/bookingSlice";

const Bookings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings } = useSelector((state: RootState) => state.bookings);

  React.useEffect(() => {
    dispatch(fetchBookingsThunk());
  }, [dispatch]);

  const [filteredData, setFilteredData] = React.useState(bookings);

  return (
    <Box sx={{ width: "100%" }} className="w-full">
      {/* Filter and Search */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "30px", color: "GrayText" }}
      >
        Bookings
      </Typography>
      <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />

      {/* Booking Table */}
      <BookingTable data={filteredData} />
    </Box>
  );
};

export default Bookings;
