import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";

const AccountPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isChangingPassword, setIsChangingPassword] = React.useState(false);

  interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    phone: string;
    salary: number;
    role: string;
    password: string;
    username: string;
  }

  const user: UserData = {
    id: 1,
    firstName: "Abel",
    lastName: "Tesfaye",
    image:
      "https://www.radiofrance.fr/s3/cruiser-production/2021/05/e1e9f515-d792-41cd-8872-189e62905985/1200x680_gettyimages-1231050791_1.webp",
    phone: "123-456-7890",
    salary: 200000,
    role: "Admin",
    username: "abel.tesfaye",
    password: "",
  };
  const [userState, setUserState] = React.useState<UserData>(user);

  function setUser(updatedUser: UserData): void {
    setUserState(updatedUser);
  }

  return (
    <Box className="flex flex-col lg:flex-row justify-between lg:items-start items-center w-[100%] gap-3">
      <Box className="w-full lg:w-[25%]">
        <Card sx={{ borderRadius: 3, boxShadow: "none" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              p: 5,
              gap: 1,
            }}
          >
            <Avatar src={user.image} sx={{ width: 80, height: 80 }} />
            <Typography sx={{ fontSize: "20px" }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography className="text-gray-400">
              <span className="font-bold text-gray-400">salary: </span>
              {user.salary}
            </Typography>
            <Typography
              sx={{
                color: "white",
                paddingX: 1,
                borderRadius: 3,
              }}
              className="bg-blue-500"
            >
              {user.role}
            </Typography>
          </CardContent>
          <hr />
          <CardActions>
            <Box className="bg-blue-50 rounded-xl w-full">
              <Button fullWidth sx={{ fontSize: "10px" }}>
                Update Photo
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Box className="w-full lg:w-[70%]">
        <Card sx={{ borderRadius: 3, boxShadow: "none" }}>
          <Typography sx={{ fontSize: "15px" }} className="text-gray-600 p-5">
            Profile
          </Typography>
          <hr />
          <CardContent>
            <Box className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <TextField
                label="First Name"
                type="text"
                value={userState.firstName}
                onChange={(e) =>
                  setUser({ ...userState, firstName: e.target.value })
                }
                margin="normal"
                sx={{ borderRadius: 3 }}
              />
              <TextField
                label="Last Name"
                type="text"
                value={userState.lastName}
                onChange={(e) =>
                  setUser({ ...userState, lastName: e.target.value })
                }
                margin="normal"
                sx={{ borderRadius: 3 }}
              />
              <TextField
                label="Phone"
                type="text"
                value={userState.phone}
                onChange={(e) =>
                  setUser({ ...userState, phone: e.target.value })
                }
                margin="normal"
                sx={{ borderRadius: 3 }}
              />
              <TextField
                label="Username"
                type="text"
                value={userState.username}
                onChange={(e) =>
                  setUser({ ...userState, username: e.target.value })
                }
                margin="normal"
                sx={{ borderRadius: 3 }}
              />
              {!isChangingPassword ? (
                <Box className="flex justify-between ">
                  <Button
                    variant="text"
                    onClick={() => setIsChangingPassword(true)}
                    sx={{ textAlign: "left" }}
                  >
                    Change Password
                  </Button>
                  <Box></Box>
                </Box>
              ) : (
                <>
                  <TextField
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    value={userState.password}
                    onChange={(e) =>
                      setUser({ ...userState, password: e.target.value })
                    }
                    margin="normal"
                    sx={{ borderRadius: 3 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    margin="normal"
                    sx={{ borderRadius: 3 }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={confirmPassword !== userState.password}
                    helperText={
                      confirmPassword !== userState.password
                        ? "Passwords do not match"
                        : ""
                    }
                  />
                  <Button
                    variant="text"
                    onClick={() => setIsChangingPassword(false)}
                    sx={{ textAlign: "left", width: "100px" }}
                  >
                    Hide
                  </Button>
                </>
              )}
            </Box>
          </CardContent>
          <hr />
          <CardActions className="flex justify-between">
            <Box></Box>
            <Button
              sx={{ color: "white", fontSize: "10px", margin: "5px 10px" }}
              variant="contained"
              color="primary"
            >
              Save Details
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default AccountPage;
