import EmployeeTable from "@/components/employees/employeeTable";
import React from "react";
import { employees } from "../components/employees/employeeData";
import Search from "@/components/employees/searchEmployee";
import { Typography } from "@mui/material";

const Employees: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState(employees);

  return (
    <div className="w-full">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "30px", color: "GrayText" }}
      >
        Employees
      </Typography>
      <Search
        onFilterChange={(data) => {
          setFilteredData(data);
        }}
      />
      <EmployeeTable data={filteredData} />
    </div>
  );
};

export default Employees;
