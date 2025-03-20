import React from "react";
import Header from "./Header";
import { FiZap, FiAward, FiCompass } from "react-icons/fi";
import { useState } from "react";
import StatCard from "./StatCard";
import Motivation from "./Motivation";

const CurrentStreak = () => {
  const [startDate, setStartDate] = useState(""); // For storing the inputted date
  const [streakDays, setStreakDays] = useState(null); // For storing calculated streak days
  const [nextMilestone, setNextMilestone] = useState(50); // Default next milestone in days
  const [successRate] = useState("90%"); // Hardcoded success rate for now

  // Handle the input change and update streak calculation
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    setStartDate(inputDate);

    // Calculate streak days if input is valid
    if (inputDate) {
      const start = new Date(inputDate);
      const currentDate = new Date();
      const days = Math.floor((currentDate - start) / (1000 * 60 * 60 * 24));
      setStreakDays(days);

      // Dynamically calculate the next milestone based on streakDays
      const milestone = Math.ceil(days / 50) * 50; // Example: milestones every 50 days
      setNextMilestone(milestone + 50); // Set the next milestone
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="p-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <FiCompass className="absolute -top-8 -right-8 text-teal/20 w-24 h-24" />
            <div className="bg-gradient-to-br from-teal to-teal-dark w-48 h-48 rounded-full flex items-center justify-center mx-auto shadow-xl mb-6">
              <span className="text-cream text-6xl font-bold">
                {streakDays !== null ? streakDays : "N/A"}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray mb-2">
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-teal font-roboto">
              UNSTOPPABLE FORCE
            </span>
          </h1>
          <p className="text-xl text-gray font-roboto">
            Alcohol-free since{" "}
            {startDate ? new Date(startDate).toDateString() : "N/A"}
          </p>
        </div>

        {/* Date Input */}
        <div className="text-center mb-8">
          <label
            htmlFor="sobrietyStart"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Enter Your Sobriety Start Date
          </label>
          <input
            id="sobrietyStart"
            type="date"
            value={startDate}
            onChange={handleDateChange}
            className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={<FiZap className="text-teal mr-2 w-6 h-6" />}
            title="Current Streak"
            value={streakDays !== null ? `${streakDays} Days` : "N/A"}
            subText="Personal Best! 🎉"
          />
          <StatCard
            icon={<FiAward className="text-teal mr-2 w-6 h-6" />}
            title="Total Sober"
            value={streakDays !== null ? `${streakDays} Days` : "N/A"}
            subText={`${successRate} Success Rate`}
          />
          <StatCard
            icon={<FiCompass className="text-teal mr-2 w-6 h-6" />}
            title="Next Milestone"
            value={nextMilestone ? `${nextMilestone} Days` : "N/A"}
            subText={`${nextMilestone - streakDays} days to go!`}
          />
        </div>

        {/* Motivation Section */}
        <Motivation />
      </main>
    </div>
  );
};

export default CurrentStreak;
