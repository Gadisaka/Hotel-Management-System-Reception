import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BookingData } from "../bookings/bookingsData";
import ViewBooking from "../bookings/viewBooking";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface RecentBooksProps {
  bookings: BookingData[];
}

const RecentBookings = ({ bookings }: RecentBooksProps) => {
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
    <Box className="flex gap-5 justify-between overflow-x-scroll h-full w-full">
      {/* active customers card */}
      <Box className="w-full max-h-fit  bg-white">
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: 2 }}
        >
          <Box className="flex p-2 gap-2 w-full items-center">
            <FiberManualRecord sx={{ color: "pink" }} />
            <Typography variant="h6" className="text-blue-500 font-bold">
              Recent Bookings
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
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton variant="text" width="80%" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" width="60%" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" width="40%" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" width="70%" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" width="70%" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
            {status === "failed" && (
              <Box display="flex" justifyContent="center" p={2}>
                <Typography color="error">Failed to load bookings</Typography>
              </Box>
            )}
            {status === "succeeded" && bookings.length > 0 && (
              <TableBody>
                {bookings.slice(0, 6).map((booking: BookingData) => (
                  <TableRow
                    key={booking.id}
                    hover
                    onClick={() => handleRowClick(booking)}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell className="cursor-pointer">
                      {booking.customerName}
                    </TableCell>
                    <TableCell className="cursor-pointer">
                      {booking.roomNumber}
                    </TableCell>
                    <TableCell className="cursor-pointer">
                      {booking.status}
                    </TableCell>
                    <TableCell className="cursor-pointer">
                      {new Date(booking.startDate).toDateString()}
                    </TableCell>
                    <TableCell className="cursor-pointer">
                      {new Date(booking.endDate).toDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
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

export default RecentBookings;
