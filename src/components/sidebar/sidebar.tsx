import { Box, Typography, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

import {
  Domain,
  Dashboard,
  Book,
  Bed,
  Badge,
  Person,
  People,
} from "@mui/icons-material";

export default function Sidebar() {
  const location = useLocation();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "250px",
          gap: 5,
          padding: 2,
          // boxShadow: 2,
          bgcolor: "background.default",
        }}
        className="lg:flex hidden flex-col  "
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Domain sx={{ color: "primary.light", fontSize: 40 }} />
          <Typography variant="h3" color="primary.light">
            Dotel
          </Typography>
        </Box>

        <Stack spacing={2} sx={{ width: "100%" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/" ? "primary.light" : "inherit",
                color: location.pathname === "/" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <Dashboard />
              <Typography variant="button">Dashboard</Typography>
            </Item>
          </Link>

          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/bookings"
                    ? "primary.light"
                    : "inherit",
                color: location.pathname === "/bookings" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <Book />
              <Typography variant="button">Bookings</Typography>
            </Item>
          </Link>

          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/rooms" ? "primary.light" : "inherit",
                color: location.pathname === "/rooms" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <Bed />
              <Typography variant="button">Rooms</Typography>
            </Item>
          </Link>

          <Link to="/employees" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/employees"
                    ? "primary.light"
                    : "inherit",
                color: location.pathname === "/employees" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <Badge />
              <Typography variant="button">Employees</Typography>
            </Item>
          </Link>

          <Link to="/customers" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/customers"
                    ? "primary.light"
                    : "inherit",
                color: location.pathname === "/customers" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <People />
              <Typography variant="button">Customers</Typography>
            </Item>
          </Link>

          <Link to="/account" style={{ textDecoration: "none" }}>
            <Item
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                paddingLeft: 5,
                backgroundColor:
                  location.pathname === "/account"
                    ? "primary.light"
                    : "inherit",
                color: location.pathname === "/account" ? "#fff" : "inherit",
                boxShadow: "none",
              }}
            >
              <Person />
              <Typography variant="button">Account</Typography>
            </Item>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
