import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { RoomData } from "./roomData";
import EditRoom from "./EditRoom";

interface RoomTableProps {
  data: RoomData[];
}

export default function RoomTable({ data }: RoomTableProps) {
  const [editingRoom, setEditingRoom] = React.useState<RoomData | null>(null);

  const handleEditClick = (room: RoomData) => {
    setEditingRoom(room); // Set the selected room for editing
  };

  const handleCloseDialog = () => {
    setEditingRoom(null); // Close the dialog
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.id}</TableCell>
                <TableCell>{room.roomNumber}</TableCell>
                <TableCell>{room.type}</TableCell>
                <TableCell>{room.price}</TableCell>
                <TableCell>{room.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(room)}
                    sx={{ bgcolor: "red" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Edit Room */}
      <Dialog
        open={!!editingRoom} // Dialog opens if editingRoom is not null
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Room</DialogTitle>
        <DialogContent>
          {editingRoom && (
            <EditRoom room={editingRoom} onCancel={handleCloseDialog} />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
