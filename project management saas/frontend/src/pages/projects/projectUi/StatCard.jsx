import react from "react";

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">

      <div className="flex items-center gap-2 text-gray-600 mb-3">
        {icon}

        <span className="text-xs">
          {label}
        </span>
      </div>

      <p className="text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
};

export default StatCard;