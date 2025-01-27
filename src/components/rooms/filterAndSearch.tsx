import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { rooms } from "./roomData";

interface FilterAndSearchProps {
  onFilterChange: (filteredData: typeof rooms) => void;
}

export default function FilterAndSearch({
  onFilterChange,
}: FilterAndSearchProps) {
  const [searchText, setSearchText] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("All");
  const [filterType, setFilterType] = React.useState("All");
  const [searchResults, setSearchResults] = React.useState<typeof rooms>([]);
  const [showSearchBox, setShowSearchBox] = React.useState(false);

  // Handler to add a new room

  // Existing combined filtering logic
  React.useEffect(() => {
    let results = rooms;

    if (filterStatus !== "All") {
      results = results.filter((room) => room.status === filterStatus);
    }

    if (filterType !== "All") {
      results = results.filter((room) => room.type === filterType);
    }

    onFilterChange(results);
  }, [filterStatus, filterType, onFilterChange]);

  React.useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setShowSearchBox(false);
    } else {
      const results = rooms.filter((room) =>
        room.roomNumber.toString().includes(searchText)
      );
      setSearchResults(results);
      setShowSearchBox(true);
    }
  }, [searchText]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
        paddingX: 2,
        borderRadius: 1,
        gap: 2,
        mb: 2,
        // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="flex flex-col lg:flex-row"
    >
      {/* Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "max-content",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          {[
            "All",
            "Available",
            "Occupied",
            "Maintenance",
            "Cleaning",
            "Unavailable",
          ].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "contained" : "outlined"}
              onClick={() => setFilterStatus(status)}
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              {status}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          {["All", "Single", "Double", "Triple", "VIP"].map((type) => (
            <Button
              key={type}
              variant={filterType === type ? "contained" : "outlined"}
              onClick={() => setFilterType(type)}
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              {type}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Search Bar and Add Room Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "100%",
          // alignItems: "end",
          justifyContent: "center",
        }}
        className=" items-start lg:items-end  p-5"
      >
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "50%",
            position: "relative",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search by room number"
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
                    }}
                    onClick={() => {
                      setSearchText(result.roomNumber.toString());
                      setShowSearchBox(false);
                    }}
                  >
                    <strong>Number:</strong> {result.roomNumber}
                    <br />
                    <strong>Type:</strong> {result.type} <br />
                    <strong>Price:</strong> {result.price} <br />
                    <strong>Status:</strong> {result.status}
                  </Box>
                ))
              ) : (
                <Box sx={{ padding: 2 }}>No results found</Box>
              )}
            </Box>
          )}
        </Box>

        {/* Add Room Button */}
      </Box>
    </Box>
  );
}
