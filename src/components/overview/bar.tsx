import { Box, Button, TextField, Typography } from "@mui/material";
import * as React from "react";

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
  return (
    <Box className="bg-white w-full max-h-fit p-3  items-center gap-2 justify-between flex flex-col lg:flex-row px-4">
      <Box className=" flex flex-col gap-2 w-1/2">
        <Typography variant="h5" color="initial">
          {getGreeting()}
        </Typography>
        <Box className="flex gap-2  flex-col lg:flex-row">
          <Button
            variant="outlined"
            color="black"
            sx={{
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Create Booking
          </Button>
          <Button
            variant="outlined"
            color="black"
            sx={{
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Check Rooms
          </Button>
          <Button
            variant="outlined"
            color="black"
            sx={{
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Create Customer
          </Button>
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
