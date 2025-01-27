import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { customers } from "../customers/customersData";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}
const SearchCustomer: React.FC<DialogProps> = ({ open, onClose }) => {
  const [showSearchBox, setShowSearchBox] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<typeof customers>(
    []
  );

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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Search Results</DialogTitle>
      <DialogContent
        sx={{
          height: "50vh", // Increase the height of the dialog
        }}
      >
        {/* Search Results Box */}
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: 1,
            position: "relative",
          }}
          className="w-full h-full"
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
                top: 45,
                left: 0,
                right: 0,
                zIndex: 10,
                maxHeight: 600, // Increased height
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
                      setSearchText(result.firstName);
                      setShowSearchBox(false);
                    }}
                  >
                    <strong>Name:</strong> {result.firstName} {result.lastName}{" "}
                    <br />
                    <strong>Phone:</strong> {result.phone} <br />
                    <strong>Status:</strong> {result.status}
                  </Box>
                ))
              ) : (
                <Box sx={{ padding: 2 }}>No results found</Box>
              )}
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchCustomer;
