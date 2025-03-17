import React, { useState } from "react";
import { FiSend, FiHeart, FiSunrise } from "react-icons/fi";
import Header from "../components/Header";

// Dummy chat data
const initialMessages = [
  {
    id: 1,
    sender: "bot",
    content: "Welcome back! How are you feeling today?",
    timestamp: "9:00 AM",
    type: "text",
  },
  {
    id: 2,
    sender: "user",
    content: "A bit anxious about tonight's social event",
    timestamp: "9:02 AM",
    type: "text",
  },
  {
    id: 3,
    sender: "bot",
    content:
      "I understand. Let's practice a quick grounding exercise together...",
    timestamp: "9:03 AM",
    type: "action",
    action: "Breathing Exercise",
  },
  {
    id: 4,
    sender: "bot",
    content:
      "Remember your why: 'I choose long-term wellness over temporary relief' 💪",
    timestamp: "9:05 AM",
    type: "affirmation",
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "user",
          content: newMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "text",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />

      {/* Chat Container */}
      <div className="flex-1 flex flex-col p-4 max-w-2xl mx-auto w-full">
        {/* Date Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <FiSunrise className="text-teal mr-2" />
            <span className="text-gray font-roboto">Today's Chat</span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 space-y-4 overflow-y-auto pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.sender === "user"
                    ? "bg-teal text-cream"
                    : "bg-white shadow-lg"
                } ${
                  message.type === "affirmation"
                    ? "border-2 border-teal/30"
                    : ""
                }`}
              >
                <p className="text-sm mb-1 opacity-70 font-roboto">
                  {message.timestamp}
                </p>
                <div className="space-y-2 font-montserrat">
                  {message.type === "action" ? (
                    <div className="bg-cream/20 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray">
                        {message.content}
                      </p>
                      <button className="mt-2 bg-teal text-cream px-4 py-2 rounded-full text-sm flex items-center font-montserrat">
                        <FiHeart className="mr-2" />
                        {message.action}
                      </button>
                    </div>
                  ) : (
                    <p className="text-lg leading-relaxed font-montserrat">
                      {message.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button className="bg-white text-teal p-2 rounded-lg shadow-sm hover:shadow-md transition-all font-poppins tracking-wide font-medium">
            Emergency Resources
          </button>
          <button className="bg-white text-teal p-2 rounded-lg shadow-sm hover:shadow-md transition-all font-poppins tracking-wide font-medium">
            Daily Check-In
          </button>
        </div>

        {/* Input Area */}
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-lg font-montserrat">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your thoughts here..."
            className="flex-1 bg-cream/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
          <button
            onClick={handleSend}
            className="bg-teal text-cream p-3 rounded-xl hover:bg-teal-dark transition-colors"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
