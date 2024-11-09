import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => setShowPopover(!showPopover);

  // Helper to determine if a link is active
  const isSelected = (path) => location.pathname === path;

  return (
    <header className="flex items-center justify-between p-4 bg-zinc-800 text-white shadow-md">
      {/* Left side navigation links with boxes */}
      <nav className="flex space-x-4">
        <div
          className={`px-4 py-2 rounded ${
            isSelected("/") ? "bg-gray-700" : "bg-gray-600"
          }`}
        >
          <Link to="/" className="hover:text-gray-400">
            Daily
          </Link>
        </div>
        <div
          className={`px-4 py-2 rounded ${
            isSelected("/monthly-tasks") ? "bg-gray-700" : "bg-gray-600"
          }`}
        >
          <Link to="/monthly-tasks" className="hover:text-gray-400">
            Monthly
          </Link>
        </div>
        <div
          className={`px-4 py-2 rounded ${
            isSelected("/backlog-tasks") ? "bg-gray-700" : "bg-gray-600"
          }`}
        >
          <Link to="/backlog-tasks" className="hover:text-gray-400">
            Backlogs
          </Link>
        </div>
      </nav>

      {/* Right side user icon with popover */}
      <div className="relative">
        <button
          onClick={togglePopover}
          className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center"
        >
          <img
            src="/path-to-user-photo.jpg" // replace with the actual path or use a default icon
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {/* Popover dropdown */}
        {showPopover && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/login" className="text-gray-800">
                  Login
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/logout" className="text-gray-800">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
