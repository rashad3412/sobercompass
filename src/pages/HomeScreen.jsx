import React, { useState } from "react";
import { FiMenu, FiMoreVertical, FiPlus } from "react-icons/fi";
import compass from "../assets/compass.png";

// Dummy chat data with affirmations
const chatHistory = {
  Today: [
    {
      id: 1,
      date: "10:30 AM",
      preview: "Exploring triggers during social events...",
      affirmation: "I am stronger than my cravings",
    },
    {
      id: 2,
      date: "9:15 AM",
      preview: "Morning check-in: How do I feel today?",
      affirmation: "Every sober moment is a victory",
    },
  ],
  Yesterday: [
    {
      id: 3,
      date: "4:45 PM",
      preview: "Evening reflection: Handling stress...",
      affirmation: "I choose health over temporary relief",
    },
  ],
  Previous: [
    {
      id: 4,
      date: "March 12",
      preview: "Understanding withdrawal symptoms...",
      affirmation: "My journey gets easier every day",
    },
  ],
};

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray hover:text-teal transition-colors"
          >
            <FiMenu size={24} />
          </button>

          <img src={compass} alt="compass" width={60} className="text-center" />

          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-gray hover:text-teal transition-colors"
            >
              <FiMoreVertical size={24} />
            </button>

            {showOptions && (
              <div className="absolute right-0 translate-x-4 mt-8 w-48 bg-cream rounded-lg shadow-lg py-2">
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

      {/* Hamburger Menu Content */}
      {isMenuOpen && (
        <div className="fixed top-23 left-0 z-20 flex ">
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
                ✕
              </button>
            </div>

            <nav className="space-y-4">
              <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                🏆 Current Streak: 27 Days
              </button>
              <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                📚 Recovery Resources
              </button>
              <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                🧘 Daily Check-In
              </button>
            </nav>
          </div>

          {/* Backdrop Overlay */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        {/* Chat History */}
        <div className="space-y-6">
          <div className="flex items-center justify-between"></div>
          {/* New Chat Button */}
          <div className="mb-8">
            <button className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-medium hover:bg-teal-dark transition-colors shadow-lg flex items-center justify-center gap-2">
              <FiPlus size={20} />
              Start New Chat
            </button>
          </div>
          <h2 className="text-center text-gray">Chat History</h2>

          {Object.entries(chatHistory).map(([date, chats]) => (
            <div key={date} className="space-y-4">
              <h3 className="text-gray font-medium">{date}</h3>
              <div className="space-y-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="bg-teal p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-cream">{chat.date}</span>
                      <span className="text-sm bg-teal/10 text-cream px-2 py-1 rounded-full ">
                        {chat.affirmation}
                      </span>
                    </div>
                    <p className="text-white text-xl">{chat.preview}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
