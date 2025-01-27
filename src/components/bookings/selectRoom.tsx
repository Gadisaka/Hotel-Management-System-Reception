import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Box, Button } from "@mui/material";
import { rooms, RoomData } from "../rooms/roomData";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSelectRoom: (room: string) => void;
  rooms: RoomData[];
}

const SelectRoomDialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onSelectRoom,
}) => {
  const [roomType, setRoomType] = useState<
    "Single" | "Double" | "Triple" | "VIP"
  >("Single");
  const filteredRooms = rooms.filter((room) => room.type === roomType);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Select Room</DialogTitle>
      <DialogContent>
        <Box mb={2} display="flex" gap={2}>
          <Button variant="outlined" onClick={() => setRoomType("Single")}>
            Single
          </Button>
          <Button variant="outlined" onClick={() => setRoomType("Double")}>
            Double
          </Button>
          <Button variant="outlined" onClick={() => setRoomType("Triple")}>
            Triple
          </Button>
          <Button variant="outlined" onClick={() => setRoomType("VIP")}>
            VIP
          </Button>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={1}>
          {filteredRooms.map((room) => (
            <Button
              key={room.id}
              variant="outlined"
              disabled={room.status !== "Available"}
              onClick={() => {
                onSelectRoom(`${roomType} Room ${room.roomNumber}`);
                onClose();
              }}
              style={{
                backgroundColor:
                  room.status !== "Available" ? "#f0f0f0" : "#e0ffe0",
              }}
            >
              {room.roomNumber}
            </Button>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SelectRoomDialog;
