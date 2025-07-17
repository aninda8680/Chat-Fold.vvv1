// src/Frontend/pages/DashboardLayout.tsx

import React from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default DashboardLayout;
