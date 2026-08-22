import react from "react";
import { CalendarDays } from "lucide-react";

const UpcomingItem = ({ title, project, date }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#171717] transition">
      <div
        className="w-9 h-9 rounded-lg bg-[#1b1b1b]
                      border border-[#252525]
                      flex items-center justify-center"
      >
        <CalendarDays size={16} className="text-gray-500" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-300 truncate">{title}</p>

        <p className="text-xs text-gray-600 mt-1 truncate">{project}</p>
      </div>

      <span className="text-xs text-gray-500 shrink-0">{date}</span>
    </div>
  );
};


export default UpcomingItem;