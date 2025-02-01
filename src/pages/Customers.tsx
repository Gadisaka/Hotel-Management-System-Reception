import CustomersTable from "@/components/customers/customerTable";
import FilterAndSearch from "@/components/customers/FilterAndSearch";
import { Box, Typography } from "@mui/material";
import React from "react";
import {} from "@/components/customers/customersData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Customers: React.FC = () => {
  const { customers } = useSelector((state: RootState) => state.customers);
  const [filteredData, setFilteredData] = React.useState(customers);

  return (
    <Box sx={{ width: "100%" }} className="w-full">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "30px", color: "GrayText" }}
      >
        Customer
      </Typography>

      {/* Filter and Search */}
      <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />

      {/* Customers Table */}
      <CustomersTable data={filteredData} />
    </Box>
  );
};

export default Customers;
