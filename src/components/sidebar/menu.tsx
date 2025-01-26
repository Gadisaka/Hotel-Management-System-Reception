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

import { useSidebarStore } from "@/store/store";

export default function Menu() {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

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

  const handleToggleSidebar = () => {
    toggleSidebar();
    console.log("clicked");
  };

  return (
    <>
      {isSidebarOpen && (
        <Box
          sx={{
            height: "100vh",
            width: "250px",
            gap: 5,
            padding: 2,
            // boxShadow: 2,
            bgcolor: "background.default",
          }}
          className="flex lg:hidden flex-col "
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Domain sx={{ color: "primary.light", fontSize: 40 }} />
            <Typography variant="h3" color="primary.light">
              _Dotel
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
                onClick={handleToggleSidebar}
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
                onClick={handleToggleSidebar}
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
                    location.pathname === "/rooms"
                      ? "primary.light"
                      : "inherit",
                  color: location.pathname === "/rooms" ? "#fff" : "inherit",
                  boxShadow: "none",
                }}
                onClick={handleToggleSidebar}
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
                  color:
                    location.pathname === "/employees" ? "#fff" : "inherit",
                  boxShadow: "none",
                }}
                onClick={handleToggleSidebar}
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
                  color:
                    location.pathname === "/customers" ? "#fff" : "inherit",
                  boxShadow: "none",
                }}
                onClick={handleToggleSidebar}
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
                    location.pathname === "/settings"
                      ? "primary.light"
                      : "inherit",
                  color: location.pathname === "/settings" ? "#fff" : "inherit",
                  boxShadow: "none",
                }}
                onClick={handleToggleSidebar}
              >
                <Person />
                <Typography variant="button">Account</Typography>
              </Item>
            </Link>
          </Stack>
        </Box>
      )}
    </>
  );
}
