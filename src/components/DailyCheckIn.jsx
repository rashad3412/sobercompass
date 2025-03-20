import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  FiSmile,
  FiFrown,
  FiMeh,
  FiZap,
  FiCoffee,
  FiCalendar,
} from "react-icons/fi";
import Confetti from "react-dom-confetti";

const DailyCheckIn = () => {
  const [mood, setMood] = useState("");
  const [energyLevel, setEnergyLevel] = useState(5);
  const [checkIns, setCheckIns] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Load check-ins from localStorage
  useEffect(() => {
    const savedCheckIns =
      JSON.parse(localStorage.getItem("dailyCheckIns")) || [];
    setCheckIns(savedCheckIns);
  }, []);

  // Save check-ins whenever they update
  useEffect(() => {
    localStorage.setItem("dailyCheckIns", JSON.stringify(checkIns));
  }, [checkIns]);

  const handleCheckIn = () => {
    if (!mood) return;

    const newCheckIn = {
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      mood,
      energy: energyLevel,
    };

    setCheckIns([...checkIns, newCheckIn]);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Check for streak (consecutive days)
  const calculateStreak = () => {
    if (checkIns.length === 0) return 0;

    let streak = 1;
    for (let i = checkIns.length - 1; i > 0; i--) {
      const prevDate = new Date(checkIns[i - 1].date);
      const currentDate = new Date(checkIns[i].date);
      const diffDays = (currentDate - prevDate) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Confetti
        active={showConfetti}
        config={{ elementCount: 50, spread: 90 }}
      />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent font-roboto">
            Daily Compass
          </h1>
          <p className="text-gray mt-2">Let's chart today's journey 🌱</p>
        </div>

        {/* Check-in Summary */}
        {checkIns.length > 0 && (
          <div className="bg-white rounded-full p-4 mb-8 shadow-md flex items-center justify-center gap-4">
            <FiCalendar className="text-teal" />
            <span className="font-medium">
              {checkIns.length} day{checkIns.length > 1 ? "s" : ""} tracked
            </span>
            <span className="text-teal font-bold">
              🔥 {calculateStreak()}-day streak!
            </span>
          </div>
        )}

        {/* Mood Selector */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray mb-4 flex items-center gap-2">
            <FiZap className="text-teal" />
            How's Your Spark Today?
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setMood("great")}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all ${
                mood === "great"
                  ? "bg-teal text-cream scale-105"
                  : "bg-white hover:bg-cream"
              }`}
            >
              <FiSmile className="w-12 h-12" />
              <span className="mt-2 font-medium">Feeling Bright!</span>
            </button>
            <button
              onClick={() => setMood("okay")}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all ${
                mood === "okay"
                  ? "bg-teal text-cream scale-105"
                  : "bg-white hover:bg-cream"
              }`}
            >
              <FiMeh className="w-12 h-12" />
              <span className="mt-2 font-medium">Holding Steady</span>
            </button>
            <button
              onClick={() => setMood("low")}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all ${
                mood === "low"
                  ? "bg-teal text-cream scale-105"
                  : "bg-white hover:bg-cream"
              }`}
            >
              <FiFrown className="w-12 h-12" />
              <span className="mt-2 font-medium">Need Fuel</span>
            </button>
          </div>
        </div>

        {/* Energy Slider */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray mb-6 flex items-center gap-2">
            <FiCoffee className="text-teal" />
            Energy Meter
          </h2>
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

        {/* Save Button */}
        <button
          onClick={handleCheckIn}
          disabled={!mood}
          className="w-full bg-teal text-cream p-4 rounded-2xl font-bold hover:bg-teal-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Save Today's Check-in
        </button>

        {/* Recent Check-ins */}
        {checkIns.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Recent Entries</h3>
            <ul className="space-y-2">
              {checkIns
                .slice(-3)
                .reverse()
                .map((entry, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center bg-cream p-3 rounded-lg"
                  >
                    <span>{entry.date}</span>
                    <span className="text-teal font-bold">
                      {entry.energy}/10 ⚡
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Motivational Message */}
        <div className="mt-8 text-center animate-pulse text-gray-600">
          <p>
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
