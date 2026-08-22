import react from "react";
import { Circle, CheckCircle2 } from "lucide-react";

const TaskRow = ({
  title,
  status,
  priority,
  assignee,
  completed,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-4 hover:bg-[#151515] transition cursor-pointer">

      <div className="flex items-center gap-3 min-w-0">

        {completed ? (
          <CheckCircle2
            size={18}
            className="text-gray-500 shrink-0"
          />
        ) : (
          <Circle
            size={18}
            className="text-gray-700 shrink-0"
          />
        )}

        <span
          className={`text-sm truncate ${
            completed
              ? "text-gray-600 line-through"
              : "text-gray-300"
          }`}
        >
          {title}
        </span>

      </div>

      <div className="flex items-center gap-4 pl-7 md:pl-0">

        <span
          className={`text-xs ${
            status === "Done"
              ? "text-gray-500"
              : status === "In Progress"
              ? "text-blue-400"
              : "text-gray-600"
          }`}
        >
          {status}
        </span>

        <span
          className={`text-xs ${
            priority === "High"
              ? "text-red-400"
              : priority === "Medium"
              ? "text-yellow-500"
              : "text-gray-600"
          }`}
        >
          {priority}
        </span>

        <div className="w-7 h-7 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[10px] text-gray-400">
          {assignee}
        </div>

      </div>

    </div>
  );
};


export default TaskRow;