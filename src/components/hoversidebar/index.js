import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HoverSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Menu Icon */}
      <div className="bg-green-800 text-white p-4 cursor-pointer rounded-r-xl shadow-lg hover:bg-green-900 transition-all duration-300">
        ☰
      </div>

      {/* Sidebar Panel */}
      {isOpen && (
        <div className="absolute top-0 left-14 w-64 h-screen bg-green-100 text-green-900 p-6 rounded-r-2xl shadow-2xl z-10 border-l border-green-200 transition-all duration-300">
          <h2 className="text-xl font-bold mb-6 border-b border-green-300 pb-2">
            🌿 Menu
          </h2>

          <ul className="space-y-4">
            <li>
              <SidebarButton label="👤 Profile" onClick={() => navigate("/profile")} />
            </li>
            <li>
              <SidebarButton label="📦 Orders" onClick={() => navigate("/orders")} />
            </li>
            <li>
              <SidebarButton label="🔑 Login" onClick={() => navigate("/auth/login")} />
            </li>
            <li>
            <SidebarButton
  label="🚪 Logout"
  onClick={async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        path: "/"
      });
      

      if (response.ok) {
        alert("Logged out!");
        window.location.href = "/auth/login";
      } else {
        alert("Logout failed.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout.");
    }
  }}
/>

            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const SidebarButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left text-base font-medium bg-green-200 hover:bg-green-300 text-green-900 px-4 py-2 rounded-lg shadow-inner transition-all duration-200"
  >
    {label}
  </button>
);
