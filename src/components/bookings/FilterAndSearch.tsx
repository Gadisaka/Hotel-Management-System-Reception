import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { bookings } from "./bookingsData"; // Import the data

interface FilterAndSearchProps {
  onFilterChange: (filteredData: typeof bookings) => void;
}

export default function FilterAndSearch({
  onFilterChange,
}: FilterAndSearchProps) {
  const [searchText, setSearchText] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("All");
  const [searchResults, setSearchResults] = React.useState<typeof bookings>([]);
  const [showSearchBox, setShowSearchBox] = React.useState(false);

  // Handle filter change
  React.useEffect(() => {
    let results = bookings;

    if (filterStatus !== "All") {
      results = bookings.filter((booking) => booking.status === filterStatus);
    }

    onFilterChange(results);
  }, [filterStatus, onFilterChange]);

  // Handle search results
  React.useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setShowSearchBox(false);
    } else {
      const results = bookings.filter((booking) =>
        booking.customerName.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchBox(true);
    }
  }, [searchText]);

  return (
    <Box
      sx={{
        display: "flex",

        mb: 2,
        padding: 2,
        bgcolor: "white",
      }}
      className="flex-col lg:flex-row lg:justify-between justify-start items-start lg:items-center"
    >
      {/* Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          // backgroundColor: "background.paper",
          borderRadius: 1,
          p: 1,
          // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {["All", "Pending", "Confirmed", "Cancelled", "Completed"].map(
          (status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "contained" : "outlined"}
              onClick={() => setFilterStatus(status)}
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
              }}
            >
              {status}
            </Button>
          )
        )}
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: "40%",
          position: "relative",
        }}
      >
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

        {/* Search Results Box */}
        {showSearchBox && (
          <Box
            sx={{
              position: "absolute",
              top: 45, // Position below the search bar
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
                  }}
                  onClick={() => {
                    setSearchText(result.customerName);
                    setShowSearchBox(false);
                  }}
                >
                  <strong>Name:</strong> {result.customerName} <br />
                  <strong>Room:</strong> {result.roomNumber}
                </Box>
              ))
            ) : (
              <Box sx={{ padding: 2 }}>No results found</Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
