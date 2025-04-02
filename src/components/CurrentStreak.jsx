import React, { useState, useEffect } from "react";
import Header from "./Header";
import { FiZap, FiAward, FiCompass } from "react-icons/fi";
import StatCard from "./StatCard";
import Motivation from "./Motivation";

const CurrentStreak = () => {
  // Initialize state from localStorage
  const [startDate, setStartDate] = useState(
    () => localStorage.getItem("sobrietyStartDate") || ""
  );
  const [streakDays, setStreakDays] = useState(null);
  const [nextMilestone, setNextMilestone] = useState(50);

  // Calculate streak days and next milestone
  useEffect(() => {
    if (!startDate) return;

    const start = new Date(startDate).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    const days = Math.floor((today - start) / (1000 * 60 * 60 * 24));

    setStreakDays(days);
    setNextMilestone(Math.ceil((days + 1) / 50) * 50);
    localStorage.setItem("sobrietyStartDate", startDate);
  }, [startDate]);

  // Handle date input change
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    if (new Date(inputDate) > new Date())
      return alert("Please select a past date.");
    setStartDate(inputDate);
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
                {streakDays ?? "N/A"}
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
            {streakDays === null ? "Start Your Journey" : "Update Your Date"}
          </label>
          <input
            id="sobrietyStart"
            type="date"
            value={startDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split("T")[0]} // Prevent future dates
            className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={<FiZap className="text-teal mr-2 w-6 h-6" />}
            title="Current Streak"
            value={`${streakDays ?? "N/A"} Days`}
            subText="Personal Best! 🎉"
          />
          <StatCard
            icon={<FiAward className="text-teal mr-2 w-6 h-6" />}
            title="Total Sober"
            value={`${streakDays ?? "N/A"} Days`}
            subText="90% Success Rate"
          />
          <StatCard
            icon={<FiCompass className="text-teal mr-2 w-6 h-6" />}
            title="Next Milestone"
            value={`${nextMilestone ?? "N/A"} Days`}
            subText={
              streakDays
                ? `${nextMilestone - streakDays} days to go!`
                : "Set your date"
            }
          />
        </div>

        {/* Motivation Section */}
        <Motivation />
      </main>
    </div>
  );
};

export default CurrentStreak;
