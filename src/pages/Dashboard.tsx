import Bar from "@/components/overview/bar";
import Overview from "@/components/overview/overview";
import useAuthStore from "@/zustand/store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { token, checkTokenExpiration } = useAuthStore();

  useEffect(() => {
    checkTokenExpiration();
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate, checkTokenExpiration]);
  return (
    <div className="flex flex-col gap-5 justify-around h-full w-full">
      <Bar />
      <Overview />
    </div>
  );
};
export default Dashboard;
