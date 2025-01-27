import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Box, Button } from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSelectRoom: (room: string) => void;
}

const fakeRooms = {
  single: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    status: i % 2 === 0 ? "occupied" : "available",
  })),
  double: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    status: i % 3 === 0 ? "occupied" : "available",
  })),
  triple: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    status: i % 4 === 0 ? "occupied" : "available",
  })),
  vip: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    status: i % 2 === 0 ? "occupied" : "available",
  })),
};

const SelectRoomDialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onSelectRoom,
}) => {
  const [roomType, setRoomType] = useState<
    "single" | "double" | "triple" | "vip"
  >("single");
  const rooms = fakeRooms[roomType];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Select Room</DialogTitle>
      <DialogContent>
        <Box mb={2} display="flex" gap={2}>
          <Button
            variant={roomType === "single" ? "contained" : "outlined"}
            onClick={() => setRoomType("single")}
          >
            Single
          </Button>
          <Button
            variant={roomType === "double" ? "contained" : "outlined"}
            onClick={() => setRoomType("double")}
          >
            Double
          </Button>
          <Button
            variant={roomType === "triple" ? "contained" : "outlined"}
            onClick={() => setRoomType("triple")}
          >
            Triple
          </Button>
          <Button
            variant={roomType === "vip" ? "contained" : "outlined"}
            onClick={() => setRoomType("vip")}
          >
            VIP
          </Button>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={1}>
          {rooms.map((room) => (
            <Button
              key={room.id}
              variant="outlined"
              disabled={room.status === "occupied"}
              onClick={() => {
                onSelectRoom(`${roomType} Room ${room.id}`);
                onClose();
              }}
              style={{
                backgroundColor:
                  room.status === "occupied" ? "#f0f0f0" : "#e0ffe0",
              }}
            >
              {room.id}
            </Button>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SelectRoomDialog;
