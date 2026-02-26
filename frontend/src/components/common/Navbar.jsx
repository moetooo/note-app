import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, PlusCircle, StickyNote } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <StickyNote size={22} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">Simple Note App</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${location.pathname === "/"
                ? "bg-blue-600/10 text-blue-400"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
          >
            <LayoutGrid size={18} />
            <span className="hidden sm:inline">All Notes</span>
          </Link>

          <Link
            to="/create"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${location.pathname === "/create"
                ? "bg-blue-600/10 text-blue-400"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
          >
            <PlusCircle size={18} />
            <span className="hidden sm:inline">New Note</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
