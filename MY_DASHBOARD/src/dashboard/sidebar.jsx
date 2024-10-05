import { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", icon: "🏠", href: "dashboard" },
    { name: "Analytics", icon: "📊", href: "#analytics" },
    { name: "Settings", icon: "⚙️", href: "#settings" },
    { name: "Profile", icon: "👤", href: "#profile" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
  };

  return (
    <div
      className={`h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-800 text-gray-100 flex flex-col transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <span className="text-white text-2xl font-semibold">
          {isCollapsed ? "MD" : "My Dashboard"}
        </span>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "➡️" : "⬅️"} {/* Toggle Icon Placeholder */}
        </button>
      </div>
      <nav className="mt-5">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center p-3 ${
              activeLink === item.name
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveLink(item.name)}
          >
            <span className="mr-3">{item.icon}</span>
            {!isCollapsed && item.name}
          </a>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <button
          onClick={logout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
