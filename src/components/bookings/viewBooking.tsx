import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BookingData } from "./bookingsData";
import {
  changeBookingStatusThunk,
  fetchBookingsThunk,
} from "@/Features/Bookings/bookingSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import React from "react";

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
  const dispatch: AppDispatch = useDispatch();
  const changeBookingStatus = (status: string) => {
    try {
      if (booking?.id && status) {
        dispatch(changeBookingStatusThunk({ id: booking.id, status: status }));
        dispatch(fetchBookingsThunk());
        console.log(`Booking ID: ${booking?.id} status changed to ${status}`);
      }
    } catch (error) {
      console.error(error);
    }
    onClose();
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
            <strong>Check-in Date:</strong>{" "}
            {booking?.startDate
              ? new Date(booking.startDate).toDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Check-out Date:</strong>{" "}
            {booking?.endDate
              ? new Date(booking.endDate).toDateString()
              : "N/A"}
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
              onClick={() => {
                if (booking) {
                  changeBookingStatus("CONFIRMED");
                  // setNewStatus("CONFIRMED");
                }
              }}
              variant="contained"
              color="primary"
            >
              Confirm
            </Button>
          ) : booking?.status === "CONFIRMED" ? (
            <Box className="flex gap-2">
              <Button
                onClick={() => {
                  if (booking) {
                    changeBookingStatus("COMPLETED");
                  }
                }}
                variant="contained"
                color="success"
              >
                Check-Out
              </Button>
              <Button
                onClick={() => {
                  if (booking) {
                    changeBookingStatus("CANCELLED");
                  }
                }}
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
