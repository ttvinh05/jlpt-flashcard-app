import { NavLink } from "react-router"; 
import { FiHome, FiBook, FiBarChart2 } from "react-icons/fi";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`border-r border-white/10 bg-white/5 backdrop-blur-xl flex flex-col py-6 h-full transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-20"}`}>

      <nav className="flex flex-col gap-2 px-4 mt-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center rounded-lg transition-colors h-11 overflow-hidden ${
              isActive 
                ? "bg-white/10 text-blue-400" 
                : "text-zinc-400 hover:text-zinc-50 hover:bg-white/5"
            }`
          }
        >
          <div className="w-12 flex items-center justify-center shrink-0">
            <FiHome size={20} />
          </div>
          <span className={`whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            Trang chủ
          </span>
        </NavLink>

        <NavLink 
          to="/decks" 
          className={({ isActive }) => 
            `flex items-center rounded-lg transition-colors h-11 overflow-hidden ${
              isActive 
                ? "bg-white/10 text-blue-400" 
                : "text-zinc-400 hover:text-zinc-50 hover:bg-white/5"
            }`
          }
        >
          <div className="w-12 flex items-center justify-center shrink-0">
            <FiBook size={20} />
          </div>
          <span className={`whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            Thư viện
          </span>
        </NavLink>

        <NavLink 
          to="/stats" 
          className={({ isActive }) => 
            `flex items-center rounded-lg transition-colors h-11 overflow-hidden ${
              isActive 
                ? "bg-white/10 text-blue-400" 
                : "text-zinc-400 hover:text-zinc-50 hover:bg-white/5"
            }`
          }
        >
          <div className="w-12 flex items-center justify-center shrink-0">
            <FiBarChart2 size={20} />
          </div>
          <span className={`whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            Thống kê
          </span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;