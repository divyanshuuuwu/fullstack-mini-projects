
import React from 'react'

const StateCard = ({ icon, title, value, danger }) => {
  return (
    <div
      className="bg-[#111111] border border-[#1f1f1f]
                    rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600">{icon}</div>

        <span className="text-[10px] uppercase tracking-wider text-gray-700">
          Projects
        </span>
      </div>

      <p
        className={`text-2xl font-semibold ${
          danger ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </p>

      <p className="text-xs text-gray-600 mt-1">{title}</p>
    </div>
  );
};

export default StateCard;