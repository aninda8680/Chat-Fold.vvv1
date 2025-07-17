// src/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthPage from "../Frontend/pages/AuthPage"; 
import Dashboard from "../Frontend/pages/Dashboard"; // We'll create this next
import Profile from "../Frontend/pages/Profile"; // create this next






const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <AuthPage /> : <Navigate to="/dashboard" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
