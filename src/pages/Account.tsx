import { Typography } from "@mui/material";
import AccountPage from "../components/account/account";

const Account: React.FC = () => {
  return (
    <div className="w-full">
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: "30px", color: "GrayText" }}
      >
        Account
      </Typography>
      <AccountPage />
    </div>
  );
};
export default Account;
