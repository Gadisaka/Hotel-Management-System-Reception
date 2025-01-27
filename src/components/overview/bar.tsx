import { Box, Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import CreateBookingDialog from "../bookings/createBooking";
import SelectRoomDialog from "../bookings/selectRoom";
import CreateCustomerDialog from "../customers/createCustomer";

const user: string = "Abel";
// afternoon if time  is past 12:00 pm and good morning if time is lessthan 12:00pm and soon
const getGreeting: () => string = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return `Good morning ${user} ☀️`;
  } else if (currentHour < 18) {
    return `Good afternoon ${user} 🌞`;
  } else {
    return `Good evening ${user} 🌜`;
  }
};

const Bar: React.FC = () => {
  const [createBookingDialog, setCreateBookingDialog] = React.useState(false);
  const [selectRoomDialogOpen, setSelectRoomDialogOpen] = React.useState(false);
  const [customerDialogOpen, setCustomerDialogOpen] = React.useState(false);

  const handleCustomerCreated = (fullName: string) => {
    //api here
    console.log(fullName);
    setCustomerDialogOpen(false);
  };

  return (
    <Box className="bg-white w-full max-h-fit p-3  items-center gap-2 justify-between flex flex-col lg:flex-row px-4">
      <Box className=" flex flex-col gap-2 w-1/2">
        <Typography variant="h5" color="initial">
          {getGreeting()}
        </Typography>
        <Box className="flex gap-2  flex-col lg:flex-row">
          <Button
            variant="outlined"
            onClick={() => setCreateBookingDialog(true)}
          >
            Create Booking
          </Button>
          <CreateBookingDialog
            open={createBookingDialog}
            onClose={() => setCreateBookingDialog(false)}
          />
          <Button
            variant="outlined"
            onClick={() => setSelectRoomDialogOpen(true)}
          >
            Check Rooms
          </Button>
          <SelectRoomDialog
            open={selectRoomDialogOpen}
            onClose={() => setSelectRoomDialogOpen(false)}
            onSelectRoom={() => {}}
            rooms={[]}
          />

          <Button
            variant="outlined"
            onClick={() => setCustomerDialogOpen(true)}
          >
            Create Customer
          </Button>
          <CreateCustomerDialog
            open={customerDialogOpen}
            onClose={() => setCustomerDialogOpen(false)}
            onCustomerCreated={handleCustomerCreated}
          />
        </Box>
      </Box>

      <Box className=" w-1/2 lg:w-1/3 h-full">
        <TextField
          variant="outlined"
          placeholder="Search by customer name"
          fullWidth
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};
export default Bar;
