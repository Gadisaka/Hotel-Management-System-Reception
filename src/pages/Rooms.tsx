import FilterAndSearch from "@/components/rooms/filterAndSearch";
import { Box, Typography } from "@mui/material";
import * as React from "react";
// import { rooms } from "@/components/rooms/roomData";
import RoomTable from "@/components/rooms/roomTable";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Rooms: React.FC = () => {
  const { rooms } = useSelector((state: RootState) => state.rooms);

  const [filteredData, setFilteredData] = React.useState(rooms);

  return (
    <div className="w-full">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "30px", color: "GrayText" }}
      >
        Rooms
      </Typography>
      <Box>
        <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />
        <RoomTable data={filteredData} />
      </Box>
    </div>
  );
};

export default Rooms;
