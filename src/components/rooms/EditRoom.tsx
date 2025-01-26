import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RoomData } from "./roomData";

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
        label="Room Number"
        name="roomNumber"
        value={editedRoom.roomNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Type"
        name="type"
        value={editedRoom.type}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        value={editedRoom.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Status"
        name="status"
        value={editedRoom.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
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
        <Button
          variant="contained"
          color="secondary"
          onClick={onCancel}
          sx={{ bgcolor: "red", marginTop: 2 }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
