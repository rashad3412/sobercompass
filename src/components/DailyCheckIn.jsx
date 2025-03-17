import React, { useState } from "react";
import Header from "./Header";
import { FiSmile, FiFrown, FiMeh, FiZap, FiCoffee } from "react-icons/fi";

const DailyCheckIn = () => {
  const [mood, setMood] = useState("");
  const [energyLevel, setEnergyLevel] = useState(5);
  const [gratitude, setGratitude] = useState("");

  const MoodButton = ({ type, icon, label }) => (
    <button
      onClick={() => setMood(type)}
      className={`p-6 rounded-2xl flex-1 flex flex-col items-center transition-all ${
        mood === type
          ? "bg-teal text-cream scale-105"
          : "bg-white hover:bg-cream"
      }`}
    >
      {icon}
      <span className="mt-2 font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
            Daily Compass
          </h1>
          <p className="text-gray mt-2">Let's chart today's journey 🌱</p>
        </div>

        {/* Mood Selector */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray mb-4 flex items-center gap-2">
            <FiZap className="text-teal" />
            How's Your Spark Today?
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <MoodButton
              type="great"
              icon={<FiSmile className="w-12 h-12" />}
              label="Feeling Bright!"
            />
            <MoodButton
              type="okay"
              icon={<FiMeh className="w-12 h-12" />}
              label="Holding Steady"
            />
            <MoodButton
              type="low"
              icon={<FiFrown className="w-12 h-12" />}
              label="Need Fuel"
            />
          </div>
        </div>

        {/* Energy Slider */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray mb-6 flex items-center gap-2">
            <FiCoffee className="text-teal" />
            Energy Meter
          </h2>
          <div className="space-y-4">
            <input
              type="range"
              min="1"
              max="10"
              value={energyLevel}
              onChange={(e) => setEnergyLevel(e.target.value)}
              className="w-full range-teal"
            />
            <div className="flex justify-between text-gray">
              <span>🌙 Resting</span>
              <span className="text-teal font-bold text-lg">
                {energyLevel}/10
              </span>
              <span>⚡ Charged</span>
            </div>
          </div>
        </div>

        {/* Gratitude Input */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray mb-4 flex items-center gap-2">
            😇 Today's Silver Lining
          </h2>
          <textarea
            value={gratitude}
            onChange={(e) => setGratitude(e.target.value)}
            placeholder="One thing I'm grateful for today..."
            className="w-full p-4 bg-cream/20 rounded-xl border border-teal/30 focus:ring-2 focus:ring-teal/50"
            rows="3"
          />
        </div>

        {/* Submission */}
        <button className="w-full bg-teal text-cream py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:bg-teal-dark transition-all transform hover:scale-[1.02] active:scale-95">
          Set Today's Course →
        </button>

        {/* Daily Surprise */}
        <div className="mt-8 text-center animate-pulse">
          <p className="text-gray-600">
            {
              [
                "You're doing amazing!",
                "Progress, not perfection!",
                "One day at a time!",
              ][new Date().getDay() % 3]
            }
          </p>
        </div>
      </main>
    </div>
  );
};

export default DailyCheckIn;
