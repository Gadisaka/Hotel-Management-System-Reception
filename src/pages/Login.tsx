import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../Features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  let debounceTimeout: NodeJS.Timeout | null = null;

  const role = "RECEPTIONIST";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(async () => {
      dispatch(loginStart()); // Set loading state

      try {
        const response = await fetch(
          "https://hotel-management-system-backend-yref.onrender.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, role }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();
        dispatch(loginSuccess(data.token));
        localStorage.setItem("token", data.token);
        // Save token in Redux store
        navigate("/");
      } catch (err: unknown) {
        if (err instanceof Error) {
          dispatch(loginFailure(err.message)); // Set error state
        } else {
          dispatch(loginFailure("An unknown error occurred")); // Set error state
        }
      }
    }, 300);
  };

  return (
    <Box className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-8">
      <Paper className="w-full max-w-md p-8 shadow-md" elevation={3}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Sign in
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          gutterBottom
        ></Typography>

        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <Alert severity="info" className="mt-4">
          Use <strong>johndoe</strong> with password <strong>password</strong>
        </Alert>
      </Paper>
    </Box>
  );
};

export default LoginPage;
