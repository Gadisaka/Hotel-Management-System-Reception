import * as React from "react";
import { EmployeeData } from "./employeeData";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface EditEmployeeProps {
  open: boolean;
  onClose: () => void;
  employee: EmployeeData;
}

const EditEmployee: React.FC<EditEmployeeProps> = ({
  open,
  onClose,
  employee,
}) => {
  const [editedEmployee, setEditedEmployee] =
    React.useState<EmployeeData>(employee);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here (e.g., API call or updating state)
    console.log("Updated Room Data:", editedEmployee);
    onClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Employee</DialogTitle>
      <DialogContent>
        <Box className="flex flex-col items-center gap-5">
          <Box sx={{ width: "100px", height: "100px", paddingX: "20px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJDcXgyZYwQpsIiIg_i8dYhgI0UQ7RKOSAQ&s"
              alt="Employee"
            />
          </Box>
          <Button variant="outlined" color="primary">
            Update Profile
          </Button>
          <Box sx={{}}>
            <TextField
              label="First Name"
              name="firstName"
              value={editedEmployee.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={editedEmployee.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Salary"
              name="salary"
              value={editedEmployee.salary}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={editedEmployee.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            {employee.role === "Receptionist" || employee.role === "admin" ? (
              <Box>
                <TextField
                  label="Username"
                  name="username"
                  value={editedEmployee.username}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  name="password"
                  value={editedEmployee.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              </Box>
            ) : null}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // bgcolor: "green",
              }}
            ></Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "space-between  ", padding: 2 }}
      >
        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={onClose}
          sx={{ bgcolor: "red", marginTop: 2 }}
        >
          Fire
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditEmployee;
