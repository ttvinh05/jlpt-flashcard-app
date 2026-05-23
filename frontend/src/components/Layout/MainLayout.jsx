import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToggle = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <div className="h-screen bg-zinc-950 flex flex-col text-slate-100 font-sans">
      
      <Header handleToggle={handleToggle} />

      <div className="flex flex-1 overflow-hidden">
        
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 overflow-y-auto relative">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;