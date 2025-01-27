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
    status: "expired",
    startingDate: new Date("2023-01-01"),
    endDate: new Date("2023-01-10"),
  },
  {
    id: "2",
    fullName: "Jane Smith",
    roomNumber: "102",
    status: "expired",
    startingDate: new Date("2023-02-01"),
    endDate: new Date("2023-02-10"),
  },
];
const ExpiredBookings = () => {
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
  );
};

export default ExpiredBookings;
