import React from "react";
import { Box, Avatar, IconButton } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useSidebarStore } from "@/store/store.js";
import { Close, Menu as MenuIcon } from "@mui/icons-material";
import Profile from "./Profile.js";

const Top: React.FC = () => {
  const getFormattedDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  const user = {
    image:
      "https://www.radiofrance.fr/s3/cruiser-production/2021/05/e1e9f515-d792-41cd-8872-189e62905985/1200x680_gettyimages-1231050791_1.webp",

    role: "Admin",
    username: "John",
  };

  const today = getFormattedDate();

  const handleToggleSidebar = () => {
    toggleSidebar();
    console.log("clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        p: 2,
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        borderBottom: "1px solid #f0f0f0",
        // width: "full",
      }}
      // className="shadow-sm  "
    >
      <Box className="flex lg:hidden w-full">
        {" "}
        <IconButton
          sx={{
            position: "absolute",

            zIndex: 1000,
            top: 16,
            left: 16,
          }}
          onClick={handleToggleSidebar}
        >
          {isSidebarOpen ? <Close /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Box></Box>
      <Box className="hidden lg:flex">{today}</Box>
      <Avatar
        sx={{ bgcolor: deepPurple[500] }}
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        src={user.image}
      />
      <Profile
        open={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={{ image: user.image, role: user.role, username: user.username }}
      />
    </Box>
  );
};

export default Top;
