import * as React from "react";
import { employees } from "./employeeData";
import { Box, TextField, Button } from "@mui/material";
import AddEmployee from "./addEmployee";

interface FilteredDataProps {
  onFilterChange: (filteredData: typeof employees) => void;
}

export default function Search({ onFilterChange }: FilteredDataProps) {
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<typeof employees>(
    []
  );
  const [showSearchBox, setShowSearchBox] = React.useState(false);
  const [addEmployeeDialogOpen, setAddEmployeeDialogOpen] =
    React.useState(false);

  const handleAddEmployee = (newEmployee: {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    sex: string;
    password: string;
    salary: number;
    role: string;
    phone: string;
    birthDate: string;
    username: string;
  }) => {
    employees.push(newEmployee); // Add the new employee to the data
    onFilterChange([...employees]); // Update parent with new data
  };

  React.useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setShowSearchBox(false);
    } else {
      const results = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchBox(true);
    }
  }, [searchText]);

  return (
    <div>
      <Box
        sx={{
          gap: 1,
        }}
        className="flex flex-col bg-white mb-5 rounded-lg lg:flex-row w-full justify-between p-5"
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
            placeholder="Search by employee name"
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
                      setSearchText(result.firstName.toString());
                      setShowSearchBox(false);
                    }}
                  >
                    <strong>Name:</strong> {result.firstName} {result.lastName}
                    <br />
                    <strong>Sex:</strong> {result.sex} <br />
                    <strong>Role:</strong> {result.role} <br />
                    <strong>Phone:</strong> {result.phone}
                  </Box>
                ))
              ) : (
                <Box sx={{ padding: 2 }}>No results found</Box>
              )}
            </Box>
          )}
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAddEmployeeDialogOpen(true)}
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
                bgcolor: "green",
              }}
            >
              Hire Employee
            </Button>
          </Box>

          {/* Add Employee Dialog */}
          <AddEmployee
            open={addEmployeeDialogOpen}
            onClose={() => setAddEmployeeDialogOpen(false)}
            employee={{
              id: 0,
              firstName: "",
              lastName: "",
              image: "",
              sex: "",
              password: "",
              salary: 0,
              role: "",
              phone: "",
              birthDate: "",
              username: "",
            }}
            onAddEmployee={handleAddEmployee}
          />
        </Box>
      </Box>
    </div>
  );
}
