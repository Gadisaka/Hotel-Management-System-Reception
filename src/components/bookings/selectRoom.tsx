import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Box, Button } from "@mui/material";
import { RoomData } from "../rooms/roomData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSelectRoom: (room: string, roomId: string, price: number) => void;
  rooms: RoomData[];
}

const SelectRoomDialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onSelectRoom,
}) => {
  const [roomType, setRoomType] = useState<
    "SINGLE" | "DOUBLE" | "TRIPLE" | "VIP"
  >("SINGLE");

  const { rooms } = useSelector((state: RootState) => state.rooms);

  const filteredRooms = rooms.filter((room) => room.type === roomType);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Select Room</DialogTitle>
      <DialogContent>
        <Box mb={2} display="flex" gap={2}>
          <Button
            variant="outlined"
            onClick={() => setRoomType("SINGLE")}
            style={{
              backgroundColor:
                roomType === "SINGLE" ? "#3b82f6" : "transparent",
              color: roomType === "SINGLE" ? "#fff" : "inherit",
            }}
          >
            Single
          </Button>
          <Button
            variant="outlined"
            onClick={() => setRoomType("DOUBLE")}
            style={{
              backgroundColor:
                roomType === "DOUBLE" ? "#3b82f6" : "transparent",
              color: roomType === "DOUBLE" ? "#fff" : "inherit",
            }}
          >
            Double
          </Button>
          <Button
            variant="outlined"
            onClick={() => setRoomType("TRIPLE")}
            style={{
              backgroundColor:
                roomType === "TRIPLE" ? "#3b82f6" : "transparent",
              color: roomType === "TRIPLE" ? "#fff" : "inherit",
            }}
          >
            Triple
          </Button>
          <Button
            variant="outlined"
            onClick={() => setRoomType("VIP")}
            style={{
              backgroundColor: roomType === "VIP" ? "#3b82f6" : "transparent",
              color: roomType === "VIP" ? "#fff" : "inherit",
            }}
          >
            VIP
          </Button>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={1}>
          {filteredRooms.map((room) => (
            <Button
              key={room.id}
              variant="outlined"
              disabled={room.status !== "AVAILABLE"}
              onClick={() => {
                onSelectRoom(
                  `${roomType} Room ${room.number}`,
                  room.id,
                  room.price
                );
                onClose();
              }}
              style={{
                backgroundColor:
                  room.status !== "AVAILABLE" ? "#f0f0f0" : "#e0ffe0",
              }}
            >
              {room.number}
            </Button>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SelectRoomDialog;
