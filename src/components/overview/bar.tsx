import { Box, Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import CreateBookingDialog from "../bookings/createBooking";
import SelectRoomDialog from "../bookings/selectRoom";
import CreateCustomerDialog from "../customers/createCustomer";
import { customers, customersData } from "../customers/customersData";
import ViewCustomer from "../customers/viewCustomer";

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
  const [viewCustomerDialogOpen, setViewCustomerDialogOpen] =
    React.useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<customersData | null>(null);

  const handleCustomerCreated = (fullName: string) => {
    //api here
    console.log(fullName);
    setCustomerDialogOpen(false);
  };

  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<typeof customers>(
    []
  );
  const [showSearchBox, setShowSearchBox] = React.useState(false);

  // Handle search results
  React.useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setShowSearchBox(false);
    } else {
      const results = customers.filter((customer) =>
        customer.firstName.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchBox(true);
    }
  }, [searchText]);

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

      <Box className=" w-1/2 lg:w-1/3 h-full relative">
        <TextField
          variant="outlined"
          placeholder="Search by customer name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          fullWidth
          InputProps={{
            sx: {
              height: 40,
              "& input": {
                fontSize: "14px",
              },
            },
          }}
        />
        {showSearchBox && (
          <Box
            sx={{
              position: "absolute",
              top: 45,
              left: 0,
              right: 0,
              zIndex: 10,
              maxHeight: 200,
              overflowY: "auto",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Box
                  key={result.id}
                  sx={{
                    padding: 1,
                    borderBottom: "1px solid #ddd",
                    "&:last-child": { borderBottom: "none" },
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => {
                    setViewCustomerDialogOpen(true);
                    setShowSearchBox(false);
                    setSelectedCustomer(result);
                  }}
                >
                  <Box>
                    <strong>Name:</strong> {result.firstName} {result.lastName}{" "}
                    <br />
                    <strong>Phone:</strong> {result.phone} <br />
                    <strong>Status:</strong> {result.status} <br />
                  </Box>
                </Box>
              ))
            ) : (
              <Box sx={{ padding: 2 }}>No results found</Box>
            )}
          </Box>
        )}
      </Box>
      <ViewCustomer
        open={viewCustomerDialogOpen}
        onClose={() => setViewCustomerDialogOpen(false)}
        customer={selectedCustomer}
      />
    </Box>
  );
};
export default Bar;
