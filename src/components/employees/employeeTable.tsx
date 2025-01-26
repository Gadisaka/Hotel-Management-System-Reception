import * as React from "react";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EmployeeData } from "./employeeData";
import EditEmployee from "./editEmployee";

interface EmployeeTableProps {
  data: EmployeeData[];
}

export default function EmployeeTable({ data }: EmployeeTableProps) {
  const [editEmployee, setEditEmplyee] = React.useState<EmployeeData | null>(
    null
  );

  const handleEditClick = (employee: EmployeeData) => {
    setEditEmplyee(employee);
  };

  const handleCloseEdit = () => {
    setEditEmplyee(null);
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>BirthDate</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((employee: EmployeeData) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.sex}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.birthDate}</TableCell>
                <TableCell>{employee.image}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(employee)}
                    sx={{ bgcolor: "red" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Employee Dialog */}
      {editEmployee && (
        <EditEmployee
          open={Boolean(editEmployee)}
          onClose={handleCloseEdit}
          employee={editEmployee}
        />
      )}
    </Box>
  );
}
