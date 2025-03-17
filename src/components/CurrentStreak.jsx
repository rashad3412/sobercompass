import React from "react";
import Header from "./Header";
import { FiZap, FiAward, FiCompass } from "react-icons/fi";

const CurrentStreak = () => {
  const streakDays = 47; // Example streak

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
                {streakDays}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray mb-2">
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-teal">
              UNSTOPPABLE FORCE
            </span>
          </h1>
          <p className="text-xl text-gray">Alcohol-free since March 12</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal">
            <div className="flex items-center mb-2">
              <FiZap className="text-teal mr-2 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray">
                Current Streak
              </h3>
            </div>
            <p className="text-3xl font-bold text-gray">{streakDays} Days</p>
            <p className="text-teal mt-2">Personal Best! 🎉</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal">
            <div className="flex items-center mb-2">
              <FiAward className="text-teal mr-2 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray">Total Sober</h3>
            </div>
            <p className="text-3xl font-bold text-gray">289 Days</p>
            <p className="text-teal mt-2">90% Success Rate</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal">
            <div className="flex items-center mb-2">
              <FiCompass className="text-teal mr-2 w-6 h-6" />
              <h3 className="text-lg font-semibold text-gray">
                Next Milestone
              </h3>
            </div>
            <p className="text-3xl font-bold text-gray">50 Days</p>
            <p className="text-teal mt-2">3 days to go!</p>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="bg-teal text-cream rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🔥 On Fire Streak 🔥</h2>
            <p className="text-lg mb-4">
              "You're rewriting your story one sober day at a time - this
              momentum is your new normal."
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cream text-teal px-6 py-2 rounded-full hover:bg-cream/90 transition">
                Share Victory
              </button>
              <button className="border-2 border-cream px-6 py-2 rounded-full hover:bg-cream/10 transition">
                Set New Goal
              </button>
            </div>
          </div>
        </div>

        {/* Progress Calendar */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray mb-4">
            Weekly Tracker
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-teal/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-teal font-medium">✓</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrentStreak;
