import React, { useState } from "react";
import { FiMenu, FiMoreVertical, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import compass from "../assets/compass.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  const menuItems = [
    { to: "/currentstreak", label: "🏆 Current Streak: 27 Days" },
    { to: "/recoveryresources", label: "📚 Recovery Resources" },
    { to: "/dailycheckin", label: "🧘 Daily Check-In" },
    { to: "/chatscreen", label: "💬 Start New Chat" },
    { to: "/homescreen", label: "⏳ History" },
  ];

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray hover:text-teal transition-colors"
          >
            <FiMenu size={24} />
          </button>

          {/* Logo */}
          <Link to="/">
            <img
              src={compass}
              alt="compass"
              width={60}
              className="text-center"
            />
          </Link>

          {/* More Options Button */}
          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-gray hover:text-teal transition-colors"
            >
              <FiMoreVertical size={24} />
            </button>

            {showOptions && (
              <div className="absolute right-0 translate-x-4 mt-8 w-48 bg-cream rounded-lg shadow-lg py-2 font-poppins font-extrabold text-xl">
                <button className="block w-full px-4 py-2 text-teal hover:bg-gray-100 text-left">
                  Sign Out
                </button>
                <button className="block w-full px-4 py-2 text-teal hover:bg-gray-100 text-left">
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      <div
        className={`fixed top-23 left-0 z-20 flex transition-all duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-72 bg-cream p-6 shadow-xl transform transition-transform duration-500 ease-in-out rounded-sm"
          style={{
            transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-teal text-xl font-bold">Your Compass</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray hover:text-teal transition-colors duration-500"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2 font-poppins font-extrabold text-gray text-lg px-2 mb-2">
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={handleNavClick}>
                <button className="w-full text-left p-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-4">
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlay to Close Menu */}
        <div
          className="flex-1 bg-black/30 transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Header;
