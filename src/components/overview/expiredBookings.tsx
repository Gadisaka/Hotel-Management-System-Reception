import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ViewBooking from "../bookings/viewBooking";
import React from "react";
import { BookingData } from "../bookings/bookingsData";

interface BookingTableProps {
  data: BookingData[];
}

const ExpiredBookings = ({ data }: BookingTableProps) => {
  const [bookingDetailsDialogOpen, setBookingDetailsDialogOpen] =
    React.useState(false);
  const [selectedBooking, setSelectedBooking] =
    React.useState<BookingData | null>(null);

  const handleRowClick = (booking: BookingData) => {
    setSelectedBooking(booking);
    setBookingDetailsDialogOpen(true);
  };
  return (
    <Box className="w-full max-h-fit p-2  bg-white">
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: 2 }}
      >
        <Box className="flex p-2 gap-2 w-full items-center">
          <FiberManualRecord sx={{ color: "red" }} />
          <Typography variant="h6" className="text-blue-500 font-bold">
            Expired Bookings
          </Typography>
        </Box>
        <Table>
          <TableHead className="">
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Starting Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter(
                (booking: BookingData) =>
                  new Date(booking.endDate) < new Date() &&
                  booking.status === "Confirmed"
              )
              .map((booking: BookingData) => (
                <TableRow
                  key={booking.id}
                  onClick={() => handleRowClick(booking)}
                  hover
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>{booking.roomNumber}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>
                    {new Date(booking.startDate).toDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(booking.endDate).toDateString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedBooking && (
        <ViewBooking
          open={bookingDetailsDialogOpen}
          onClose={() => setBookingDetailsDialogOpen(false)}
          booking={selectedBooking}
        />
      )}
    </Box>
  );
};

export default ExpiredBookings;
