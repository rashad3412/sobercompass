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
  // Resources data with actual links
  const resources = [
    {
      category: "Articles",
      icon: <FiBook />,
      items: [
        {
          title: "Rewiring Your Brain in Sobriety",
          source: "excel treatment center",
          url: "https://exceltreatmentcenter.com/brain-rewiring-and-healing-during-addiction-recovery/",
        },
        {
          title: "Building New Social Habits",
          source: "Jefferson Health",
          url: "https://www.jeffersonhealth.org/your-health/living-well/eight-tips-to-help-support-sobriety-at-social-gatherings",
        },
      ],
    },
    {
      category: "Videos",
      icon: <FiFilm />,
      items: [
        {
          title: "Morning Meditation Series",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=8_f7ltCNSAQ",
        },
        {
          title: "Sobriety Success Stories",
          source: "TED Talks",
          url: "https://www.ted.com/topics/sobriety",
        },
      ],
    },
    {
      category: "Communities",
      icon: <FiUsers />,
      items: [
        {
          title: "24/7 Support Chat",
          source: "American Centers",
          url: "https://americanaddictioncenters.org/rehab-guide/drug-addiction-chat",
        },
        {
          title: "AA Online Meetings",
          source: "Alcoholics Anonymous",
          url: "https://aa-intergroup.org/meetings/",
        },
        {
          title: "SMART Recovery",
          source: "National Community",
          url: "https://www.smartrecovery.org",
        },
      ],
    },
    {
      category: "Tools",
      icon: <FiTool />,
      items: [
        {
          title: "Craving Intensity Tracker",
          source: "SoberCompass Tool ",
          url: "https://www.betweensessions.com/wp-content/uploads/2018/03/Monitoring_Your_Cravings_031918.pdf", // Internal link
        },
        {
          title: "Relapse Prevention Plan",
          source: "PDF Template",
          url: "https://www.flcourts.gov/content/download/732700/file/RELAPSE",
        },
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
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block cursor-pointer hover:no-underline"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2"></div>
                      <div>
                        <h3 className="text-gray-800 font-medium group-hover:text-teal transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">{item.source}</p>
                      </div>
                    </div>
                  </a>
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
            <a
              href="tel:1-800-662-4357"
              className="bg-white text-red-600 p-4 rounded-xl hover:bg-red-50 transition-colors text-center hover:no-underline"
            >
              SAMHSA Hotline
              <br />
              <span className="text-sm font-normal">1-800-662-HELP (4357)</span>
            </a>

            <a
              href="sms:741741"
              className="bg-white text-red-600 p-4 rounded-xl hover:bg-red-50 transition-colors text-center hover:no-underline"
            >
              Crisis Text Line
              <br />
              <span className="text-sm font-normal">
                Text "HELLO" to 741741
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecoveryRes;
