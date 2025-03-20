import React from "react";

const StatCard = ({ icon, title, value, subText }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-teal font-montserrat">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-lg font-semibold text-gray">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-gray">{value}</p>
      <p className="text-teal mt-2">{subText}</p>
    </div>
  );
};

export default StatCard;
