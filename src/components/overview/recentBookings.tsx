import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface BookingData {
  id: string;
  fullName: string;
  roomNumber: string;
  status: string;
  startingDate: Date;
  endDate: Date;
}
const bookings: BookingData[] = [
  {
    id: "1",
    fullName: "John Doe",
    roomNumber: "101",
    status: "Checked In",
    startingDate: new Date("2023-10-01"),
    endDate: new Date("2023-10-05"),
  },
  {
    id: "2",
    fullName: "Jane Smith",
    roomNumber: "102",
    status: "Checked Out",
    startingDate: new Date("2023-09-25"),
    endDate: new Date("2023-09-30"),
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    roomNumber: "103",
    status: "Reserved",
    startingDate: new Date("2023-10-10"),
    endDate: new Date("2023-10-15"),
  },
  {
    id: "4",
    fullName: "Bob Brown",
    roomNumber: "104",
    status: "Checked In",
    startingDate: new Date("2023-10-03"),
    endDate: new Date("2023-10-07"),
  },
  {
    id: "5",
    fullName: "Charlie Davis",
    roomNumber: "105",
    status: "Cancelled",
    startingDate: new Date("2023-10-05"),
    endDate: new Date("2023-10-10"),
  },
  {
    id: "6",
    fullName: "Charlie Davis",
    roomNumber: "105",
    status: "Cancelled",
    startingDate: new Date("2023-10-05"),
    endDate: new Date("2023-10-10"),
  },
];

const RecentBookings = () => {
  return (
    <Box className="flex gap-5 justify-between h-full w-full">
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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking: BookingData) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.fullName}</TableCell>
                  <TableCell>{booking.roomNumber}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>{booking.startingDate.toDateString()}</TableCell>
                  <TableCell>{booking.endDate.toDateString()}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default RecentBookings;
