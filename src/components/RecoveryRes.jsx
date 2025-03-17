import React from "react";
import Header from "./Header";
import {
  FiBook,
  FiFilm,
  FiUsers,
  FiTool,
  FiAlertTriangle,
} from "react-icons/fi";

const RecoveryRes = () => {
  // Dummy resources data
  const resources = [
    {
      category: "Articles",
      icon: <FiBook />,
      items: [
        { title: "Rewiring Your Brain in Sobriety", source: "Recovery Today" },
        { title: "Building New Social Habits", source: "Sobriety Journal" },
      ],
    },
    {
      category: "Videos",
      icon: <FiFilm />,
      items: [
        { title: "Morning Meditation Series", source: "YouTube" },
        { title: "Sobriety Success Stories", source: "TED Talks" },
      ],
    },
    {
      category: "Communities",
      icon: <FiUsers />,
      items: [
        { title: "24/7 Support Chat", source: "SoberSpace" },
        { title: "Local Meetups", source: "Meetup.com" },
      ],
    },
    {
      category: "Tools",
      icon: <FiTool />,
      items: [
        { title: "Craving Intensity Tracker", source: "SoberCompass Tool" },
        { title: "Relapse Prevention Plan", source: "PDF Template" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 font-roboto">
          <h1 className="text-4xl md:text-5xl font-bold text-teal mb-4">
            Your Recovery Toolkit
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Curated resources to empower your journey - because every step
            forward is a victory worth celebrating 🎉
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center space-x-4 font-montserrat">
            <input
              type="text"
              placeholder="Search resources..."
              className="flex-1 bg-cream/20 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-teal/30"
            />
            <button className="bg-teal text-cream px-6 py-3 rounded-lg hover:bg-teal-dark transition-colors">
              Filter
            </button>
          </div>
          <div className="mt-4 flex space-x-2 font-roboto tracking-wide">
            {["All", "Emergency", "Community", "Tools"].map((tag) => (
              <span
                key={tag}
                className="bg-teal/10 text-teal px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 font-montserrat">
          {resources.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal"
            >
              <div className="flex items-center mb-4">
                <div className="text-teal text-2xl mr-3">{section.icon}</div>
                <h2 className="text-xl font-semibold text-gray">
                  {section.category}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2"></div>
                      <div>
                        <h3 className="text-gray-800 font-medium group-hover:text-teal transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">{item.source}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-red-50 rounded-2xl p-8 mb-12 shadow-lg border border-red-100 font-poppins font-extrabold text-gray">
          <div className="flex items-center mb-4">
            <FiAlertTriangle className="text-red-500 w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold text-red-600">Immediate Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white text-red-600 p-4 rounded-xl hover:bg-red-50 transition-colors">
              Emergency Hotline
            </button>
            <button className="bg-white text-red-600 p-4 rounded-xl hover:bg-red-50 transition-colors">
              Virtual Support Room
            </button>
            <button className="bg-white text-red-600 p-4 rounded-xl hover:bg-red-50 transition-colors">
              Crisis Text Line
            </button>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="bg-teal text-cream rounded-2xl p-8 shadow-xl font-montserrat">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Today's Mantra</h2>
            <p className="text-xl italic mb-4">
              "My strength grows with each sober choice"
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cream text-teal px-6 py-2 rounded-full hover:bg-cream/90 transition">
                Save Mantra
              </button>
              <button className="border-2 border-cream px-6 py-2 rounded-full hover:bg-cream/10 transition">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Community Spotlight */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg font-roboto">
          <h3 className="text-xl font-semibold text-gray mb-4">
            Community Picks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cream/20 p-4 rounded-xl">
              <p className="font-medium text-gray mb-2">Most Saved Article</p>
              <p className="text-teal">"The First 90 Days: What to Expect"</p>
            </div>
            <div className="bg-cream/20 p-4 rounded-xl">
              <p className="font-medium text-gray mb-2">Popular Video Series</p>
              <p className="text-teal">"Yoga for Recovery"</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecoveryRes;
