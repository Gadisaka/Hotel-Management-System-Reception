import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RoomData } from "./roomData";
import { MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
  changeRoomStatusThunk,
  fetchRoomsThunk,
} from "@/Features/Rooms/roomSlice";

interface EditRoomProps {
  room: RoomData;
  onCancel: () => void;
}

export default function EditRoom({ room, onCancel }: EditRoomProps) {
  const [editedRoom, setEditedRoom] = useState<RoomData>(room);
  const [newStatus, setNewStatus] = useState(editedRoom.status);

  const dispatch = useDispatch<AppDispatch>();

  // ✅ Fix: Update newStatus directly when the select value changes
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStatus(e.target.value as RoomData["status"]);
  };

  const handleSave = () => {
    try {
      dispatch(changeRoomStatusThunk({ id: editedRoom.id, status: newStatus }));
      console.log("Updated Room Data:", {
        id: editedRoom.id,
        status: newStatus,
      });
      dispatch(fetchRoomsThunk());

      setEditedRoom({ ...editedRoom, status: newStatus });
    } catch (err) {
      console.log("Error updating room status:", err);
    }

    onCancel(); // Close the dialog
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        select
        label="Status"
        name="status"
        value={newStatus}
        onChange={handleStatusChange} // ✅ Fixed: Correct function
        fullWidth
      >
        {["AVAILABLE", "UNAVAILABLE", "MAINTENANCE", "CLEANING"].map(
          (status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          )
        )}
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
