import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { customersData } from "./customersData";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  customer: customersData | null;
}

const ViewCustomer: React.FC<DialogProps> = ({ open, onClose, customer }) => {
  if (!customer) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Customer Details</DialogTitle>
      <DialogContent>
        <Box>
          <p>
            <strong>First Name:</strong> {customer.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {customer.lastName}
          </p>
          <p>
            <strong>Sex:</strong> {customer.sex}
          </p>
          <p>
            <strong>Phone:</strong> {customer.phone}
          </p>
          <p>
            <strong>Status:</strong> {customer.status}
          </p>
          {customer.bookingHistory && customer.bookingHistory.length > 0 ? (
            <>
              <p>
                <strong>Booking History:</strong>
              </p>
              <ul>
                {customer.bookingHistory.map((booking, index) => (
                  <li key={index}>
                    {new Date(booking.startDate).toDateString()} - Room{" "}
                    {booking.roomNumber} - {booking.status}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>
              <strong>Booking History:</strong> No bookings available.
            </p>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Box className="flex w-full justify-between">
          <Box className="flex gap-2">
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Box>
          <Button variant="contained" color="error">
            suspend
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ViewCustomer;
