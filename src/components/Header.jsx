import React, { useState } from "react";
import { FiMenu, FiMoreVertical, FiX } from "react-icons/fi";
import compass from "../assets/compass.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray hover:text-teal transition-colors"
          >
            <FiMenu size={24} />
          </button>

          <Link to="/">
            <img
              src={compass}
              alt="compass"
              width={60}
              className="text-center"
            />
          </Link>

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
                <button className="block w-full px-4 py-2 text-teal hover:bg-gray-100 text-left ont-poppins ">
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="fixed top-23 left-0 z-20 flex">
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

            <nav className="space-y-4 relative bottom-4 font-poppins font-extrabold text-gray text-lg">
              <Link to="/currentstreak">
                <button className="w-full text-left p-3 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ">
                  🏆 Current Streak: 27 Days
                </button>
              </Link>

              <Link to="/recoveryresources">
                <button className="w-full text-left p-3 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  📚 Recovery Resources
                </button>
              </Link>

              <Link to="/dailycheckin">
                <button className="w-full text-left p-3 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  🧘 Daily Check-In
                </button>
              </Link>

              <Link to="/chatscreen">
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  💬 Start New Chat
                </button>
              </Link>

              <Link to="/homescreen">
                <button className="w-full text-left p-3 mt-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  ⏳ History
                </button>
              </Link>
            </nav>
          </div>

          <div
            className="flex-1 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
