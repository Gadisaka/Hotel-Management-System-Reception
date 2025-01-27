import { People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";

interface Data {
  type: string;
  occupied: number;
  all: number;
}

const rooms: Data[] = [
  {
    type: "Single",
    occupied: 123,
    all: 200,
  },
  {
    type: "Double",
    occupied: 123,
    all: 200,
  },
  {
    type: "Triple",
    occupied: 123,
    all: 200,
  },
  {
    type: "VIP",
    occupied: 123,
    all: 200,
  },
];

const Rooms = () => {
  return (
    <Box className="grid grid-cols-2 gap-5 justify-around items-center w-full h-full">
      {/* rooms data */}

      {rooms.map((room) => {
        let icon;
        switch (room.type) {
          case "Single":
            icon = <People />;
            break;
          case "Double":
            icon = <People />;
            break;
          case "Triple":
            icon = <People />;
            break;
          case "VIP":
            icon = <People />;
            break;
          default:
            icon = <BarChartIcon />;
        }
        return (
          <Box
            key={room.type}
            className=" flex flex-col justify-between bg-white gap-5 w-full p-5 h-full"
          >
            <Box className="flex justify-between h-full w-full  items-center">
              <Typography
                variant="h5"
                className="text-sm font-bold text-gray-600 "
              >
                {room.type}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>{icon}</Box>
            </Box>

            <Box
              sx={{ display: "flex" }}
              className="h-full white items-end w-full "
            >
              <Typography variant="h3" className="text-3xl text-blue-500 ">
                {room.occupied}
              </Typography>{" "}
              <Typography variant="h5" className="text-xl text-gray-400 ">
                /{room.all}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Rooms;
