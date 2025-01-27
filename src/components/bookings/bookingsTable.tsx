import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BookingData } from "./bookingsData";
import React from "react";
import ViewBooking from "./viewBooking";

interface BookingTableProps {
  data: BookingData[];
}

export default function BookingTable({ data }: BookingTableProps) {
  const [bookingDetailsDialogOpen, setBookingDetailsDialogOpen] =
    React.useState(false);
  const [selectedBooking, setSelectedBooking] =
    React.useState<BookingData | null>(null);

  const handleRowClick = (booking: BookingData) => {
    setSelectedBooking(booking);
    setBookingDetailsDialogOpen(true);
  };
  return (
    <Box>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((booking) => (
              <TableRow
                key={booking.id}
                hover
                onClick={() => handleRowClick(booking)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.roomNumber}</TableCell>
                <TableCell>{booking.startDate}</TableCell>
                <TableCell>{booking.endDate}</TableCell>
                <TableCell>{booking.payment}</TableCell>
                <TableCell>{booking.status}</TableCell>
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
}
