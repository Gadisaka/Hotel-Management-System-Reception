import React from "react";
import { Box, Avatar, IconButton } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useSidebarStore } from "@/zustand/store.js";
import { Close, Menu as MenuIcon } from "@mui/icons-material";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

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

  const { account } = useSelector((state: RootState) => state.account);

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
        src={account?.image}
      />
      <Profile
        open={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={{
          image: account?.image || "",
          role: account?.role || "",
          username: account?.username || "",
        }}
      />
    </Box>
  );
};

export default Top;
