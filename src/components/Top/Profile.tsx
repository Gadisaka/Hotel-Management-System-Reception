import { Avatar, Box, Button, Dialog, Typography } from "@mui/material";
import * as React from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  user: {
    image: string;
    role: string;
    username: string;
  };
}

const Profile: React.FC<DialogProps> = ({ open, onClose, user }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          margin: 15,
          borderRadius: 10,
        },
      }}
      //   className="w-48"
    >
      <Box className="flex w-52 py-4 flex-col gap-2 px-3">
        <Box className="flex justify-center flex-col items-center gap-2">
          <Avatar src={user.image} />
          <Typography
            className="text-2xl text-gray-800 font-bold"
            sx={{
              fontSize: "20px",
              //   fontWeight: "bold",
              color: "gray-800",
              fontFamily: "sans-serif",
            }}
          >
            {user.username}
          </Typography>
          <Typography sx={{ color: "blue" }}>{user.role}</Typography>
        </Box>
        <Box className="flex justify-center flex-col gap-1 ">
          <a href="/account">
            <Button variant="outlined" sx={{ width: "100%" }} color="primary">
              Profile
            </Button>
          </a>

          <Button variant="contained" onClick={onClose}>
            Logout
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Profile;
