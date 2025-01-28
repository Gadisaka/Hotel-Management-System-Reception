import { People } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

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
    occupied: 12,
    all: 200,
  },
  {
    type: "Triple",
    occupied: 193,
    all: 200,
  },
  {
    type: "VIP",
    occupied: 50,
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

        const value: number = (room.occupied / room.all) * 100;

        return (
          <Box
            key={room.type}
            className=" flex flex-col justify-between bg-white gap-5 w-full p-5 h-[200px] "
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
            <BorderLinearProgress
              variant="determinate"
              value={value}
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor:
                    value > 90 ? "red" : value < 40 ? "blue-500" : "orange",
                },
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Rooms;
