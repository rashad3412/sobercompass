import React, { useState } from "react";
import { FiSend, FiSunrise } from "react-icons/fi";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ChatScreen = () => {
  // Add therapeutic responses map
  const therapeuticResponses = [
    {
      triggers: ["stress", "overwhelmed", "anxious"],
      response:
        "It sounds like you're dealing with a lot right now. Let's take three deep breaths together. Inhale slowly... hold... and exhale. How does that feel?",
    },
    {
      triggers: ["lonely", "alone", "isolated"],
      response:
        "Thank you for sharing that. Remember that recovery is a journey many are walking - would you like me to suggest some supportive communities to connect with?",
    },
    {
      triggers: ["crave", "urge", "trigger"],
      response:
        "Cravings are like waves - they build, peak, and pass. Let's ride this out together. What's something you can do right now to create distance from the craving?",
    },
    {
      triggers: ["relapse", "slipped", "mistake"],
      response:
        "Recovery isn't about perfection. This moment doesn't erase your progress. What's one small step you can take right now toward reaffirming your commitment?",
    },
    {
      triggers: ["proud", "achievement", "success"],
      response:
        "That's wonderful to hear! Celebrating victories helps reinforce positive patterns. Take a moment to truly savor this accomplishment. 🎉",
    },
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      content: "Welcome back! How are you feeling today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getTherapeuticResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const matchedResponse = therapeuticResponses.find(({ triggers }) =>
      triggers.some((trigger) => lowerMessage.includes(trigger.toLowerCase()))
    );

    return matchedResponse ? matchedResponse.response : null;
  };

  const handleSend = async () => {
    if (!newMessage.trim() || loading) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString({
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);

    // Check for therapeutic triggers first
    const dummyResponse = getTherapeuticResponse(newMessage);

    if (dummyResponse) {
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          sender: "bot",
          content: dummyResponse,
          timestamp: new Date().toLocaleTimeString({
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
      }, 800); // Simulate response delay
      return;
    }

    // If no trigger found, proceed with API call
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: newMessage,
              },
            ],
            temperature: 0.7,
            max_tokens: 150,
          }),
        }
      );

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      const botContent = data.choices[0].message.content;

      const botMessage = {
        id: messages.length + 2,
        sender: "bot",
        content: botContent,
        timestamp: new Date().toLocaleTimeString({
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage = {
        id: messages.length + 2,
        sender: "bot",
        content:
          "Let's focus on what's within your control right now. Could you tell me more about how you're caring for yourself in this moment?",
        timestamp: new Date().toLocaleTimeString({
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col p-4 max-w-2xl mx-auto w-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <FiSunrise className="text-teal mr-2" />
            <span className="text-gray font-roboto">Today's Chat</span>
          </div>
        </div>

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
                }`}
              >
                <p className="text-sm mb-1 opacity-70 font-roboto">
                  {message.timestamp}
                </p>
                <p className="text-lg leading-relaxed font-montserrat">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <Link to="/recoveryresources">
            <button className="w-full bg-white text-teal p-2 rounded-lg shadow-sm hover:shadow-md transition-all">
              Emergency Resources
            </button>
          </Link>

          <Link to="/dailycheckin">
            <button className="w-full bg-white text-teal p-2 rounded-lg shadow-sm hover:shadow-md transition-all">
              Daily Check-In
            </button>
          </Link>
        </div>

        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-lg">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your thoughts here..."
            className="flex-1 bg-cream/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/30"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            className="bg-teal text-cream p-3 rounded-xl hover:bg-teal-dark transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : <FiSend size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
