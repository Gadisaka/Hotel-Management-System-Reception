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
import LoginPage from "./pages/Login"; // Import the LoginPage
import { useAuthStore } from "./store/store.ts"; // Zustand store for authentication

const App: React.FC = () => {
  const token = useAuthStore((state) => state.token); // Check authentication status

  return (
    <Router>
      {token ? ( // Show sidebar and layout only if authenticated
        <div className="flex justify-between">
          <div className="top-0 left-0 h-screen sticky z-50">
            <Sidebar />
            <Menu />
          </div>
          <div className="flex-1">
            <div className="sticky top-0 z-50">
              <Top />
            </div>
            <main className="p-8 z-10">
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
        // Show Login page for unauthenticated users
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
