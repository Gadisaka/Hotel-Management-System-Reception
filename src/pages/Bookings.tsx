import React from "react";
import { Box, Typography } from "@mui/material";
import FilterAndSearch from "@/components/bookings/FilterAndSearch";
import BookingTable from "@/components/bookings/bookingsTable";
import { bookings } from "@/components/bookings/bookingsData";

const Bookings: React.FC = () => {
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
