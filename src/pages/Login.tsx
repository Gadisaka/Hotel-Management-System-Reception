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
import { useAuthStore } from "../store/store";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setToken = useAuthStore((state) => state.setToken);
  let debounceTimeout: NodeJS.Timeout | null = null;

  const role = "RECEPTIONIST";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(async () => {
      setIsLoading(true);
      setError(null);

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
        setToken(data.token);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
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
