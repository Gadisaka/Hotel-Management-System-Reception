import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
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
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface BookingTableProps {
  data: BookingData[];
}

const ExpiredBookings = ({ data }: BookingTableProps) => {
  const [bookingDetailsDialogOpen, setBookingDetailsDialogOpen] =
    React.useState(false);
  const [selectedBooking, setSelectedBooking] =
    React.useState<BookingData | null>(null);

  const { status } = useSelector((state: RootState) => state.bookings);

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
          {status === "loading" && (
            <TableRow>
              <TableCell colSpan={6}>
                <Box display="flex" justifyContent="center" p={2} width="100%">
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          )}
          {status === "failed" && (
            <Box display="flex" justifyContent="center" p={2}>
              <Typography color="error">Failed to load bookings</Typography>
            </Box>
          )}
          {status === "succeeded" && (
            <TableBody>
              {data.filter(
                (booking: BookingData) =>
                  new Date(booking.endDate) < new Date() &&
                  booking.status === "CONFIRMED"
              ).length > 0 ? (
                data
                  .filter(
                    (booking: BookingData) =>
                      new Date(booking.endDate) < new Date() &&
                      booking.status === "CONFIRMED"
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
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No expired bookings
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
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
