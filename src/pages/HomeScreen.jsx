import React from "react";
import { FiPlus } from "react-icons/fi";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="p-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between"></div>
          <div className="mb-8">
            <Link to="/chatscreen">
              <button className="w-full bg-teal text-cream py-4 px-6 rounded-xl font-bold hover:bg-teal-dark transition-colors shadow-lg flex items-center justify-center gap-2 font-poppins text-xl tracking-widest">
                <FiPlus size={20} />
                Start New Chat
              </button>
            </Link>
          </div>
          <h2 className="text-center text-gray font-roboto">Chat History</h2>

          {Object.entries(chatHistory).map(([date, chats]) => (
            <div key={date} className="space-y-4">
              <h3 className="text-gray font-normal font-roboto">{date}</h3>
              <div className="space-y-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="bg-teal p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-cream font-roboto">
                        {chat.date}
                      </span>
                      <span className="text-sm bg-teal/10 text-cream px-2 py-1 rounded-full font-roboto">
                        {chat.affirmation}
                      </span>
                    </div>
                    <p className="text-white text-xl font-montserrat">
                      {chat.preview}
                    </p>
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
