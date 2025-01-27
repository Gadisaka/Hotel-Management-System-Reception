import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RoomData } from "./roomData";
import { MenuItem } from "@mui/material";

interface EditRoomProps {
  room: RoomData;
  onCancel: () => void;
}

export default function EditRoom({ room, onCancel }: EditRoomProps) {
  const [editedRoom, setEditedRoom] = useState<RoomData>(room);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here (e.g., API call or updating state)
    console.log("Updated Room Data:", editedRoom);
    onCancel(); // Close the dialog
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        select
        label="Status"
        name="status"
        value={editedRoom.status}
        onChange={handleChange}
        fullWidth
      >
        {["Available", "Unavailable", "Maintenance"].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // bgcolor: "green",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
