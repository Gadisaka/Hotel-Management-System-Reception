// filepath: /c:/Users/Caleb/Desktop/PROJECTS/ON DEVELOPMENT/Hotel Management System/admin/src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.tsx";
import Top from "./components/Top/Top.tsx";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Rooms from "./pages/Rooms";
import Customers from "./pages/Customers";
import Bookings from "./pages/Bookings";
import Account from "./pages/Account.tsx";
import Menu from "./components/sidebar/menu.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex justify-between">
        <div className="top-0 left-0 h-screen sticky z-50">
          <Sidebar />
          <Menu />
        </div>
        <div className="flex-1">
          <div className="sticky top-0 z-50">
            <Top />
          </div>
          <main className="p-8 z-10 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
