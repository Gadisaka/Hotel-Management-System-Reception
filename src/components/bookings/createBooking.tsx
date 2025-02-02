import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import CreateCustomerDialog from "../customers/createCustomer";
import SelectRoomDialog from "./selectRoom";
import SearchCustomer from "./searchCustomer";
import { useDispatch } from "react-redux";
import { createBookingThunk } from "../../Features/Bookings/bookingSlice";
import { AppDispatch } from "@/app/store";

interface CreateBookingDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateBookingDialog: React.FC<CreateBookingDialogProps> = ({
  open,
  onClose,
}) => {
  //   const [open, setOpen] = useState(true);
  const [customerDialogOpen, setCustomerDialogOpen] = useState(false);
  const [selectRoomDialogOpen, setSelectRoomDialogOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedCustomerID, setSelectedCustomerID] = useState<string | null>(
    null
  );
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [searchCustomerDialogOpen, setSearchCustomerDialogOpen] =
    useState(false);
  const [selectedRoomID, setSelectedRoomID] = useState<string | null>(null);
  const [selectedRoomPrice, setSelectedRoomPrice] = useState<number | null>(
    null
  );

  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateBooking = async () => {
    if (selectedCustomer && selectedRoom && startDate && endDate) {
      setIsLoading(true);
      try {
        if (selectedCustomerID && selectedRoomID) {
          await dispatch(
            createBookingThunk({
              customer: selectedCustomerID,
              room: selectedRoomID,
              startDate: new Date(startDate!).toISOString(),
              endDate: new Date(endDate!).toISOString(),
            })
          );
        } else {
          alert("Please select a customer and a room");
        }
      } catch (error) {
        console.error("Failed to create booking:", error);
        alert("Failed to create booking. Please try again.");
      } finally {
        onClose();
        setIsLoading(false);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleCustomerCreated = (fullName: string, id: string) => {
    setSelectedCustomer(fullName);
    setSelectedCustomerID(id);
    setCustomerDialogOpen(false);
  };

  const handleSelectRoom = (room: string, roomId: string, price: number) => {
    setSelectedRoom(room);
    setSelectedRoomID(roomId);
    setSelectedRoomPrice(price);
    setSelectRoomDialogOpen(false);
  };

  return (
    <Box>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Create Booking</DialogTitle>
        <DialogContent>
          {/* Customer Section */}
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
              <Button
                variant="outlined"
                onClick={() => setCustomerDialogOpen(true)}
              >
                New Customer
              </Button>
              <Button
                variant="contained"
                onClick={() => setSearchCustomerDialogOpen(true)}
              >
                Existing Customer
              </Button>
            </Box>

            {/* Display Selected Customer */}
            {selectedCustomer && (
              <Typography variant="subtitle1">
                Selected Customer: {selectedCustomer}
              </Typography>
            )}
          </Box>

          {/* Room Selection */}
          <Box mt={3}>
            <Typography variant="subtitle1">Select Room</Typography>
            <Button
              variant="outlined"
              onClick={() => setSelectRoomDialogOpen(true)}
              sx={{ mt: 1 }}
            >
              {selectedRoom
                ? `${selectedRoom} , Price: ${selectedRoomPrice}`
                : "Select Room"}
            </Button>
          </Box>

          {/* Date Selection */}
          <Box mt={3}>
            <Typography variant="subtitle1">Select Dates</Typography>
            <Box display="flex" gap={2} mt={2}>
              <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
              />
              <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>

          {/* Actions */}
          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button
              variant="outlined"
              onClick={() => onClose()}
              color="secondary"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 2, display: "flex", justifyContent: "center" }}
              onClick={() => {
                console.log({
                  cID: selectedCustomerID,
                  rID: selectedRoomID,
                  sd: startDate,
                  ed: new Date(endDate!).toISOString(),
                  pr: selectedRoomPrice,
                });

                handleCreateBooking();
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} style={{ marginLeft: 8 }} />
              ) : (
                "Create Booking"
              )}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Create Customer Dialog */}
      <CreateCustomerDialog
        open={customerDialogOpen}
        onClose={() => setCustomerDialogOpen(false)}
        onCustomerCreated={handleCustomerCreated}
      />

      {/* Select Room Dialog */}
      <SelectRoomDialog
        open={selectRoomDialogOpen}
        onClose={() => setSelectRoomDialogOpen(false)}
        onSelectRoom={handleSelectRoom}
        rooms={[]} // Pass the rooms array here
      />

      {/* search customer  */}
      <SearchCustomer
        open={searchCustomerDialogOpen}
        onClose={() => setSearchCustomerDialogOpen(false)}
        onSelectedCustomer={(fullName: string, id: string) => {
          setSelectedCustomer(fullName);
          setSelectedCustomerID(id);
          console.log(id);
        }}
      />
    </Box>
  );
};

export default CreateBookingDialog;
