import React from "react";

// Reusable Analytics Card component
const AnalyticsCard = ({ value, label, isNegative = false }) => {
  // Determine text color based on isNegative flag
  const textColorClass = isNegative ? "text-red-500" : "text-[#7670B5]";

  return (
    <div>
      <div className="p-2 text-center rounded-lg shadow-lg bg-white">
        <div className={`text-6xl font-bold ${textColorClass} mb-2`}>
          {value}
        </div>
        <div className="text-gray-500">{label}</div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
