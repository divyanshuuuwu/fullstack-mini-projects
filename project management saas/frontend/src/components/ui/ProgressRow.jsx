import react from "react";


const ProgressRow = ({ label, value, total }) => {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">{label}</span>

        <span className="text-xs text-gray-600">{value}</span>
      </div>

      <div className="h-1.5 bg-[#1c1c1c] rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};


export default ProgressRow;