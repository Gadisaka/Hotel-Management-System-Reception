import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { customersData } from "./customersData";
import React from "react";
import ViewCustomer from "./viewCustomer";

interface CustomersTableProps {
  data: customersData[];
}

export default function CustomersTable({ data }: CustomersTableProps) {
  const [customerDialogOpen, setCustomerDialogOpen] = React.useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<customersData | null>(null);

  const handleRowClick = (customer: customersData) => {
    setSelectedCustomer(customer);
    setCustomerDialogOpen(true);
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((customer) => (
              <TableRow
                key={customer.id}
                hover
                onClick={() => handleRowClick(customer)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell>{customer.firstName}</TableCell>
                <TableCell>{customer.lastName}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.sex}</TableCell>
                <TableCell>{customer.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedCustomer && (
        <ViewCustomer
          open={customerDialogOpen}
          onClose={() => setCustomerDialogOpen(false)}
          customer={selectedCustomer}
        />
      )}
    </Box>
  );
}
