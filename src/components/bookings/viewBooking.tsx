import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BookingData } from "./bookingsData";

type ViewBookingProps = {
  open: boolean;
  onClose: () => void;
  booking: BookingData | null;
};

const ViewBooking: React.FC<ViewBookingProps> = ({
  open,
  onClose,
  booking,
}) => {
  const changeBookingStatus = (id: number, newStatus: string): void => {
    // Here you would typically make an API call to update the booking status on the server
    // For example:
    // axios.put(`/api/bookings/${id}/status`, { status: newStatus })
    //   .then(response => {
    //     // Handle success
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });

    console.log(`Booking ID: ${id}, New Status: ${newStatus}`);
    onClose();
    // Update the booking status locally if needed
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Booking Details</DialogTitle>
      <DialogContent>
        <Box>
          <p>
            <strong>Customer Name:</strong> {booking?.customerName}
          </p>
          <p>
            <strong>Room Number:</strong> {booking?.roomNumber}
          </p>
          <p>
            <strong>Check-in Date:</strong> {booking?.startDate}
          </p>
          <p>
            <strong>Check-out Date:</strong> {booking?.endDate}
          </p>
          <p>
            <strong>Payment:</strong> {booking?.payment}
          </p>
          <p>
            <strong>Status:</strong> {booking?.status}
          </p>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box className="flex w-full justify-between items-center">
          <Button onClick={onClose} variant="outlined" color="secondary">
            Close
          </Button>
          {booking?.status === "PENDING" ? (
            <Button
              onClick={() =>
                booking &&
                changeBookingStatus(parseInt(booking.id), "Confirmed")
              }
              variant="contained"
              color="primary"
            >
              Confirm
            </Button>
          ) : booking?.status === "CONFIRMED" ? (
            <Box className="flex gap-2">
              <Button
                onClick={() =>
                  booking &&
                  changeBookingStatus(parseInt(booking.id), "COMPLETED")
                }
                variant="contained"
                color="success"
              >
                Check-Out
              </Button>
              <Button
                onClick={() =>
                  booking &&
                  changeBookingStatus(parseInt(booking.id), "CANCELLED")
                }
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            </Box>
          ) : null}
        </Box>
      </DialogActions>
    </Dialog>
  );
};
export default ViewBooking;
