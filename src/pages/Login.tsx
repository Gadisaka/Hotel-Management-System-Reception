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
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/store";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useAuthStore();
  const navigate = useNavigate();
  const role = "RECEPTIONIST";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login(username, password, role);
    if (success) {
      navigate("/");
    }
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
