import { Box, Typography } from "@mui/material";
import { BookingData } from "../bookings/bookingsData";
import { FiberManualRecord } from "@mui/icons-material";
import PaidIcon from "@mui/icons-material/Paid";

interface TotalIncomeProps {
  data: BookingData[];
}

const TotalIncome: React.FC<TotalIncomeProps> = ({
  data,
}: TotalIncomeProps) => {
  const todaysIncome = data
    .filter((booking) => {
      const bookingDate = new Date(booking.startDate);
      const today = new Date();
      return (
        bookingDate.getDate() === today.getDate() &&
        bookingDate.getMonth() === today.getMonth() &&
        bookingDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce(
      (sum, booking) =>
        sum + (booking.payment ? parseFloat(booking.payment.toString()) : 0),
      0
    );
  return (
    <Box className="w-full p-3 gap-3 flex flex-col bg-white max-h-fit">
      <Box className="flex items-center gap-2">
        <FiberManualRecord sx={{ color: "purple" }} />
        <Typography variant="h6" className="text-blue-500 font-bold">
          Today's Income
        </Typography>
      </Box>
      <Box className="flex justify-between items-center">
        <Typography variant="h3" className="text-4xl text-blue-500">
          {todaysIncome} <span className="text-3xl"> Birr</span>
        </Typography>
        <PaidIcon sx={{ fontSize: 50 }} className="text-yellow-300" />
      </Box>
    </Box>
  );
};
export default TotalIncome;
