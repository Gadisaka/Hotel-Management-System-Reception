import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.tsx";
import Top from "./components/Top/Top.tsx";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Customers from "./pages/Customers";
import Bookings from "./pages/Bookings";
import Account from "./pages/Account.tsx";
import Menu from "./components/sidebar/menu.tsx";
import LoginPage from "./pages/Login";
import useAuthStore from "./zustand/store.ts";

const App: React.FC = () => {
  // const token = localStorage.getItem("token");

  // const token = useAuthStore((state) => state.token);

  const token = useAuthStore((state) => state.token);

  return (
    <Router>
      {token ? (
        <div className="flex justify-between ">
          <div className="top-0 left-0 h-screen sticky z-50">
            <Sidebar />
            <Menu />
          </div>
          <div className="flex-1">
            <div className="sticky top-0 z-50">
              <Top />
            </div>
            <main className="p-3 lg:p-8 w-full z-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
