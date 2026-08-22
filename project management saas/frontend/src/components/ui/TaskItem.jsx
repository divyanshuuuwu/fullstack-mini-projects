import react from "react";
import {Circle} from "lucide-react";


const TaskItem = ({ title, project, status, priority }) => {
  return (
    <div className="group p-3.5 rounded-xl hover:bg-[#171717] transition">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Circle
            size={17}
            className="text-gray-700 group-hover:text-gray-400 transition"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-gray-300 truncate">{title}</p>

            <span
              className={`text-[10px] shrink-0 ${
                priority === "High"
                  ? "text-red-400"
                  : priority === "Medium"
                    ? "text-yellow-500"
                    : "text-gray-600"
              }`}
            >
              {priority}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1.5">
            <p className="text-[11px] text-gray-600 truncate">{project}</p>

            <span className="text-gray-800">•</span>

            <p
              className={`text-[11px] ${
                status === "In Progress" ? "text-blue-400" : "text-gray-600"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;